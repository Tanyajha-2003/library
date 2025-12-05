"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BorrowsService = class BorrowsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async borrow(bookId, userId) {
        const book = await this.prisma.book.findUnique({ where: { id: bookId } });
        if (!book)
            throw new Error('Book not found');
        if (book.isBorrowed)
            throw new Error('Already borrowed');
        await this.prisma.book.update({ where: { id: bookId }, data: { isBorrowed: true } });
        return this.prisma.borrow.create({ data: { bookId, userId } });
    }
    async return(bookId, userId) {
        const borrow = await this.prisma.borrow.findFirst({ where: { bookId, userId, returnedAt: null } });
        if (!borrow)
            throw new Error('Borrow record not found');
        await this.prisma.borrow.update({ where: { id: borrow.id }, data: { returnedAt: new Date() } });
        await this.prisma.book.update({ where: { id: bookId }, data: { isBorrowed: false } });
        return { ok: true };
    }
    listByUser(userId) {
        return this.prisma.borrow.findMany({ where: { userId }, include: { book: true } });
    }
};
exports.BorrowsService = BorrowsService;
exports.BorrowsService = BorrowsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BorrowsService);
//# sourceMappingURL=borrows.service.js.map