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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowsController = void 0;
const common_1 = require("@nestjs/common");
const borrows_service_1 = require("./borrows.service");
let BorrowsController = class BorrowsController {
    constructor(svc) {
        this.svc = svc;
    }
    borrow(body) {
        return this.svc.borrow(Number(body.bookId), Number(body.userId));
    }
    return(body) {
        return this.svc.return(Number(body.bookId), Number(body.userId));
    }
    listByUser(id) {
        return this.svc.listByUser(Number(id));
    }
};
exports.BorrowsController = BorrowsController;
__decorate([
    (0, common_1.Post)('borrow'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BorrowsController.prototype, "borrow", null);
__decorate([
    (0, common_1.Post)('return'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BorrowsController.prototype, "return", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BorrowsController.prototype, "listByUser", null);
exports.BorrowsController = BorrowsController = __decorate([
    (0, common_1.Controller)('borrows'),
    __metadata("design:paramtypes", [borrows_service_1.BorrowsService])
], BorrowsController);
//# sourceMappingURL=borrows.controller.js.map