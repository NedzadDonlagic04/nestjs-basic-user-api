import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async getUsers() {
        return this.prisma.user.findMany();
    }

    async getUsersWithSameUserName(user_name: string) {
        return this.prisma.user.findMany({
            where: { user_name }
        });
    }

    async addUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({ data, select: {
                user_name: true,
                user_age: true,
                user_email: true
            } 
        });
    }
}
