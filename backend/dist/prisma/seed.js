"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.author.createMany({
        data: [
            { name: 'J.K. Rowling', bio: 'Author of Harry Potter' },
            { name: 'George R.R. Martin', bio: 'Author of A Song of Ice and Fire' }
        ]
    });
    const authors = await prisma.author.findMany();
    await prisma.book.createMany({
        data: [
            { title: 'Harry Potter and the Philosopher\'s Stone', description: 'Fantasy novel', authorId: authors[0].id },
            { title: 'A Game of Thrones', description: 'Fantasy novel', authorId: authors[1].id }
        ]
    });
    await prisma.user.create({
        data: {
            name: 'Admin',
            email: 'admin@example.com',
            password: '$2b$10$CwTycUXWue0Thq9StjUM0uJ8ZqE6/1sQZ5/0.yw5Z6/8Y9a0X1m9e'
        }
    });
}
main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(() => void 0);
//# sourceMappingURL=seed.js.map