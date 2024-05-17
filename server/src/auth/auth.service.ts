import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import ms from 'ms';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
        private prisma: PrismaService,
    ) { }

    async login(user: users) {
        const expires = new Date();

        expires.setMilliseconds(expires.getMilliseconds() + 
            ms(this.configService.get<string>('JWT_EXPIRATION')),
        );

        const tokenPayload: TokenPayload = {
            userId: user.id,
        }

        return {
            access_token: await this.jwtService.signAsync(tokenPayload),
            user: {
                id: user.id,
                },
            }
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
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = await this.prisma.users.create({
          data: {
            email,
            password: hashedPassword,
          },
        });
    
        return this.login(newUser);
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
