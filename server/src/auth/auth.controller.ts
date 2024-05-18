import { Body, Controller, Post, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UserRole } from 'src/users/dto/create-user.request';
import { RegisterUserResponseDto } from './dto/register-user-response';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiResponse({ status: 201, description: 'The user has been successfully logged in.', type: RegisterUserResponseDto})
    @ApiBody({ type: CreateUserDto })
    login(
         @CurrentUser() user: CreateUserDto,
         @Res({ passthrough: true }) res: Response
    ) {
        return this.authService.login(user);
    }

    @Post('register')
    @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: RegisterUserResponseDto})
    @ApiBody({ type: CreateUserDto })
    createUser(@Body() createUserDto: CreateUserDto) {
        try {
            console.log(createUserDto);
            return this.authService.signup(createUserDto.email, createUserDto.password, [UserRole.USER]);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

