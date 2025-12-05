import { PrismaService } from '../prisma.service';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): import(".prisma/client").Prisma.Prisma__BookClient<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        authorId: number;
        isBorrowed: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: any): import(".prisma/client").Prisma.Prisma__BookClient<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        authorId: number;
        isBorrowed: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__BookClient<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        authorId: number;
        isBorrowed: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    list(query: any): import(".prisma/client").Prisma.PrismaPromise<({
        author: {
            id: number;
            name: string;
            bio: string | null;
        };
        borrows: {
            id: number;
            userId: number;
            bookId: number;
            borrowedAt: Date;
            returnedAt: Date | null;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        authorId: number;
        isBorrowed: boolean;
    })[]>;
    find(id: number): import(".prisma/client").Prisma.Prisma__BookClient<{
        author: {
            id: number;
            name: string;
            bio: string | null;
        };
        borrows: {
            id: number;
            userId: number;
            bookId: number;
            borrowedAt: Date;
            returnedAt: Date | null;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        authorId: number;
        isBorrowed: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
