import { Body, Controller, Post, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { Prisma, User } from '@prisma/client';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(
         @CurrentUser() user: User,
         @Res({ passthrough: true }) res: Response
    ) {
        return this.authService.login(user);
    }

    @Post('register')
    @UseInterceptors(NoFilesInterceptor())
    createUser(@Body() request: Prisma.UserCreateInput) {
        try {
            return this.usersService.createUser(request);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}
