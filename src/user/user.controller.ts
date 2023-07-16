import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }

    @Get('/:user_name')
    async getUsersWithSameName(@Param('user_name') user_name: string) {
       return this.userService.getUsersWithSameUserName(user_name);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async addUser(@Body() body: UserDTO) {
        return this.userService.addUser(body);
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() body: UserDTO) {
        return this.userService.updateUser(id, body);
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}
