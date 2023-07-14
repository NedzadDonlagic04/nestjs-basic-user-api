import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUsers(): string {
        return this.userService.getUsers();
    }

    @Post()
    addUser(): string {
        return this.userService.addUser();
    }
}
