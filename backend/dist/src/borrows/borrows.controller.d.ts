import { BorrowsService } from './borrows.service';
export declare class BorrowsController {
    private svc;
    constructor(svc: BorrowsService);
    borrow(body: any): Promise<{
        id: number;
        userId: number;
        bookId: number;
        borrowedAt: Date;
        returnedAt: Date | null;
    }>;
    return(body: any): Promise<{
        ok: boolean;
    }>;
    listByUser(id: number): import(".prisma/client").Prisma.PrismaPromise<({
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
