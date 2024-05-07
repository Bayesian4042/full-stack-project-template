import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import ms from 'ms';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
    ) { }

    async login(user: User, response: Response) {
        const expires = new Date();

        expires.setMilliseconds(expires.getMilliseconds() + 
            ms(this.configService.get<string>('JWT_EXPIRATION')),
        );

        const tokenPayload: TokenPayload = {
            userId: user.id,
        }

        const token = await this.jwtService.signAsync(tokenPayload);

        return { access_token: token, expires: expires };
    }

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
        
}
