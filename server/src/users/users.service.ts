import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.request';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) { }

    async createUser(data: CreateUserDto) {
        try {
            return this.prismaService.users.create({
                data: {
                    email: data.email,
                    password: await bcrypt.hash(data.password, 10)
                },
                select: {
                    id: true,
                    email: true
                },
            });
        } catch (error) {
            if (error.code === 'P2002') {
                throw new UnprocessableEntityException('Email already exists');
            }
        }

    }

    async getUser(filter: any) {
        return this.prismaService.users.findFirstOrThrow({
            where: filter,
        });
    }

    async getUserById(filter: any) {
        return this.prismaService.users.findFirstOrThrow({
            where: filter,
            select: {
                id: true,
                email: true,
            },
        });
    }
}
