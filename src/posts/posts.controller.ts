import { Controller, Get, HttpStatus, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get('')
    @UsePipes(new ValidationPipe({ transform: true }))
    viewPosts(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        if(req.cookies["key"]) return this.postsService.getPosts();
        else res.status(HttpStatus.UNAUTHORIZED).send('Login required for this information!');
    }
}
