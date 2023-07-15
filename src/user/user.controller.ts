import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async addUser(@Body() body: UserDTO) {
        return this.userService.addUser(body);
    }
}
