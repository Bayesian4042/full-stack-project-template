import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @UseInterceptors(NoFilesInterceptor())
    createUser(@Body() request: CreateUserRequest) {
        try {
            return this.usersService.createUser(request);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}
