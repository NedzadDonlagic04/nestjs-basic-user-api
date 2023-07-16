import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    getPosts(): string[] {
        return [
            "Post 1",
            "Post 2",
            "Post 3",
            "Post 4"
        ];
    }
}
