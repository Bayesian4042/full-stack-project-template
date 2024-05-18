import { Body, Controller, Get, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.request';
import { UsersService } from './users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(JWTAuthGuard)
    @Get('profile')
    async getUser(@Req() req: any) {
        const userId = req.user.sub;
        return await this.usersService.getUserById({ id: userId });
    }
}
