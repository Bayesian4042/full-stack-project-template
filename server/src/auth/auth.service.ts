import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import ms from 'ms';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.request';
import { RegisterUserResponseDto } from './dto/register-user-response';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
        private prisma: PrismaService,
    ) { }

    async login(user: CreateUserDto) {
        const expires = new Date();

        expires.setMilliseconds(expires.getMilliseconds() + 
            ms(this.configService.get<string>('JWT_EXPIRATION')),
        );

        const tokenPayload: TokenPayload = {
            userId: user.email,
        }

        const registerUserResponseDto = new RegisterUserResponseDto();
        registerUserResponseDto.access_token = await this.jwtService.signAsync(tokenPayload);
        registerUserResponseDto.user = {
            id: user.email,
        };
        return registerUserResponseDto;
    };

    async verifyUser(email: string, password: string): Promise<any> {
        try {
            const user = await this.usersService.getUser({ email: email });
            const authenticated = await bcrypt.compare(password, user?.password);
            if (!authenticated) {
                throw new UnauthorizedException("Credentials are invalid.");
            }
            return user;
        } catch (error) {
            throw new UnauthorizedException("Credentials are invalid.");
        }
    }

    async signup(email: string, password: string, roles: string[]) {
      try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = await this.prisma.users.create({
          data: {
            email,
            password: hashedPassword,
          },
        });
    
        const expires = new Date();

        expires.setMilliseconds(expires.getMilliseconds() + 
            ms(this.configService.get<string>('JWT_EXPIRATION')),
        );

        const tokenPayload: TokenPayload = {
            userId: newUser.email,
        }

        // create RegisterUserResponseDto
        const registerUserResponseDto = new RegisterUserResponseDto();
        registerUserResponseDto.access_token = await this.jwtService.signAsync(tokenPayload);
        registerUserResponseDto.user = {
            id: newUser.email,
        };
        return registerUserResponseDto;

      } catch (error) {
        console.error(error);
        throw new UnauthorizedException("Credentials are invalid.");
      }
    }
    
      async getUserFromToken(token: any) {
        const payload = this.jwtService.verify(token.req.headers.authorization.split(' ')[1]);
        return this.prisma.users.findUnique({
          where: {
            id: payload.userId,
          },
        });
      }
        
}
