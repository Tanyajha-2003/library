import { PrismaService } from '../prisma.service';
export declare class AuthorsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): import(".prisma/client").Prisma.Prisma__AuthorClient<{
        id: number;
        name: string;
        bio: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: any): import(".prisma/client").Prisma.Prisma__AuthorClient<{
        id: number;
        name: string;
        bio: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__AuthorClient<{
        id: number;
        name: string;
        bio: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    list(): import(".prisma/client").Prisma.PrismaPromise<({
        books: {
            id: number;
            createdAt: Date;
            title: string;
            description: string | null;
            authorId: number;
            isBorrowed: boolean;
        }[];
    } & {
        id: number;
        name: string;
        bio: string | null;
    })[]>;
    find(id: number): import(".prisma/client").Prisma.Prisma__AuthorClient<{
        books: {
            id: number;
            createdAt: Date;
            title: string;
            description: string | null;
            authorId: number;
            isBorrowed: boolean;
        }[];
    } & {
        id: number;
        name: string;
        bio: string | null;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
