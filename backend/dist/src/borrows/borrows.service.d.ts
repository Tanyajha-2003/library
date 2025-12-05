import { PrismaService } from '../prisma.service';
export declare class BorrowsService {
    private prisma;
    constructor(prisma: PrismaService);
    borrow(bookId: number, userId: number): Promise<{
        id: number;
        userId: number;
        bookId: number;
        borrowedAt: Date;
        returnedAt: Date | null;
    }>;
    return(bookId: number, userId: number): Promise<{
        ok: boolean;
    }>;
    listByUser(userId: number): import(".prisma/client").Prisma.PrismaPromise<({
        book: {
            id: number;
            createdAt: Date;
            title: string;
            description: string | null;
            authorId: number;
            isBorrowed: boolean;
        };
    } & {
        id: number;
        userId: number;
        bookId: number;
        borrowedAt: Date;
        returnedAt: Date | null;
    })[]>;
}
