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
exports.UserCheckpointsController = void 0;
const common_1 = require("@nestjs/common");
const user_checkpoints_service_1 = require("../services/user-checkpoints.service");
const user_checkpoints_entity_1 = require("../entities/user-checkpoints.entity");
let UserCheckpointsController = class UserCheckpointsController {
    constructor(userCheckpointService) {
        this.userCheckpointService = userCheckpointService;
    }
    async createCheckpoint(response, userCheckpoint) {
        const newUserCheckpoint = await this.userCheckpointService.createUserCheckpoint(userCheckpoint);
        return response.status(common_1.HttpStatus.CREATED).json({
            newUserCheckpoint
        });
    }
    async fetchAll(response) {
        const userCheckpoints = await this.userCheckpointService.findAll();
        return response.status(common_1.HttpStatus.OK).json({
            userCheckpoints
        });
    }
    async addCheckpointToUsers(response) {
        const userCheckpoints = await this.userCheckpointService.addCheckpointsToUsers();
        return response.status(common_1.HttpStatus.OK).json({
            userCheckpoints
        });
    }
    async findById(response, id) {
        const userCheckpoint = await this.userCheckpointService.findOne(id);
        return response.status(common_1.HttpStatus.OK).json({
            userCheckpoint
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_checkpoints_entity_1.UserCheckpoints]),
    __metadata("design:returntype", Promise)
], UserCheckpointsController.prototype, "createCheckpoint", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCheckpointsController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/add-checkpoint-to-users'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCheckpointsController.prototype, "addCheckpointToUsers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserCheckpointsController.prototype, "findById", null);
UserCheckpointsController = __decorate([
    (0, common_1.Controller)('user-checkpoints'),
    __metadata("design:paramtypes", [user_checkpoints_service_1.UserCheckpointsService])
], UserCheckpointsController);
exports.UserCheckpointsController = UserCheckpointsController;
//# sourceMappingURL=user-checkpoints.controller.js.map