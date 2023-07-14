import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    addUser(): string {
        return "Added User";
    }

    getUsers(): string {
        return "All Users";
    }
}
