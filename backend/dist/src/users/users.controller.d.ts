import { UsersService } from './users.service';
export declare class UsersController {
    private users;
    constructor(users: UsersService);
    create(body: any): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    list(): Promise<{
        id: number;
        name: string;
        email: string;
        createdAt: Date;
    }[]>;
}
