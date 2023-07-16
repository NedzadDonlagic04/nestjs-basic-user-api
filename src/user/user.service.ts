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

    async updateUser(user_id: string, data: Prisma.UserUpdateInput) {
        return this.prisma.user.update({
            where: { user_id },
            data,
            select: {
                user_name: true,
                user_age: true,
                user_email: true
            }
        });
    }

    async deleteUser(user_id: string) {
        return this.prisma.user.deleteMany({
            where: { user_id }
        });
    }
}
