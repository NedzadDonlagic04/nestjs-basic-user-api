import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/user.dto';
import { Request, Response } from 'express';

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

    @Post('/login')
    @UsePipes(new ValidationPipe({ transform: true }))
    async loginUser(@Body() body: UserDTO, @Res({ passthrough: true }) res: Response) {
        const count = await this.userService.loginUser(body);
        
        if(count) res.cookie('key', 'value', { maxAge: 60000 });
        else res.status(HttpStatus.UNAUTHORIZED).send('Invalid login information!');
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
