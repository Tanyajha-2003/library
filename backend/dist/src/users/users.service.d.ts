import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        name: string;
        email: string;
        password: string;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        createdAt: Date;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
    }>;
}
