import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) { }

    async createUser(data: CreateUserRequest) {
        try {
            return this.prismaService.user.create({
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

    async getUser(filter: Prisma.UserWhereUniqueInput) {
        return this.prismaService.user.findFirstOrThrow({
            where: filter,
        });
    }

    async getUserById(filter: Prisma.UserWhereUniqueInput) {
        return this.prismaService.user.findFirstOrThrow({
            where: filter,
            select: {
                id: true,
                email: true,
            },
        });
    }
}
