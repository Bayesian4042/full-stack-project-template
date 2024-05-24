import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiBearerAuth()
@ApiTags('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(JWTAuthGuard)
    @Get('profile')
    async getUser(@Req() req: any) {
        const userId = req.user.sub;
        return await this.usersService.getUserById({ id: userId });
    }
}
