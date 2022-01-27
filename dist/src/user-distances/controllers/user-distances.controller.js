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
exports.UserDistancesController = void 0;
const common_1 = require("@nestjs/common");
const user_distances_service_1 = require("../services/user-distances.service");
const user_distances_entity_1 = require("../entities/user-distances.entity");
let UserDistancesController = class UserDistancesController {
    constructor(userDistancesService) {
        this.userDistancesService = userDistancesService;
    }
    async createDistance(response, userDistance) {
        const newUserDistance = await this.userDistancesService.createUserDistance(userDistance);
        return response.status(common_1.HttpStatus.CREATED).json({
            newUserDistance
        });
    }
    async fetchAll(response) {
        const userDistances = await this.userDistancesService.findAll();
        return response.status(common_1.HttpStatus.OK).json({
            userDistances
        });
    }
    async calculateUserDistances(response) {
        const userDistances = await this.userDistancesService.calculateDistancesForAllUsers();
        return response.status(common_1.HttpStatus.OK).json({
            userDistances
        });
    }
    async calculateUserDistancesByCurrentLocation(response, body) {
        const userDistance = await this.userDistancesService.getUDistanceFromLocationToCheckpoint(body);
        return response.status(common_1.HttpStatus.OK).json({
            userDistance
        });
    }
    async getUserRankingByCheckpoint(response, id) {
        const userRankingDetails = await this.userDistancesService.getUserRankingByCheckpointId(id);
        return response.status(common_1.HttpStatus.OK).json({
            userRankingDetails
        });
    }
    async findById(response, id) {
        const userDistance = await this.userDistancesService.findOne(id);
        return response.status(common_1.HttpStatus.OK).json({
            userDistance
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_distances_entity_1.UserDistances]),
    __metadata("design:returntype", Promise)
], UserDistancesController.prototype, "createDistance", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserDistancesController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/calculate-distances'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserDistancesController.prototype, "calculateUserDistances", null);
__decorate([
    (0, common_1.Post)('/calculate-distance'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserDistancesController.prototype, "calculateUserDistancesByCurrentLocation", null);
__decorate([
    (0, common_1.Get)('/user-ranking/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserDistancesController.prototype, "getUserRankingByCheckpoint", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserDistancesController.prototype, "findById", null);
UserDistancesController = __decorate([
    (0, common_1.Controller)('user-distances'),
    __metadata("design:paramtypes", [user_distances_service_1.UserDistancesService])
], UserDistancesController);
exports.UserDistancesController = UserDistancesController;
//# sourceMappingURL=user-distances.controller.js.map