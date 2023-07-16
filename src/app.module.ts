import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [],
  controllers: [UserController, PostsController],
  providers: [UserService, PrismaService, PostsService],
})
export class AppModule {}
