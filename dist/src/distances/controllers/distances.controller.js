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
exports.DistancesController = void 0;
const common_1 = require("@nestjs/common");
const distances_service_1 = require("../services/distances.service");
const distances_entity_1 = require("../entities/distances.entity");
let DistancesController = class DistancesController {
    constructor(distancesService) {
        this.distancesService = distancesService;
    }
    async createDistance(response, Users) {
        const newDistances = await this.distancesService.createDistance(Users);
        return response.status(common_1.HttpStatus.CREATED).json({
            newDistances,
        });
    }
    async fetchAll(response) {
        const distances = await this.distancesService.findAll();
        return response.status(common_1.HttpStatus.OK).json({
            distances,
        });
    }
    async findById(response, id) {
        const distance = await this.distancesService.findOne(id);
        return response.status(common_1.HttpStatus.OK).json({
            distance,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, distances_entity_1.Distance]),
    __metadata("design:returntype", Promise)
], DistancesController.prototype, "createDistance", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DistancesController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DistancesController.prototype, "findById", null);
DistancesController = __decorate([
    (0, common_1.Controller)('distances'),
    __metadata("design:paramtypes", [distances_service_1.DistancesService])
], DistancesController);
exports.DistancesController = DistancesController;
//# sourceMappingURL=distances.controller.js.map