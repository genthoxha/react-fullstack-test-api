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
exports.CheckpointsController = void 0;
const common_1 = require("@nestjs/common");
const checkpoints_service_1 = require("../services/checkpoints.service");
const checkpoint_entity_1 = require("../entities/checkpoint.entity");
let CheckpointsController = class CheckpointsController {
    constructor(checkpointService) {
        this.checkpointService = checkpointService;
    }
    async createCheckpoint(response, checkpoint) {
        const newCheckpoint = await this.checkpointService.createCheckpoint(checkpoint);
        return response.status(common_1.HttpStatus.CREATED).json({
            newCheckpoint
        });
    }
    async fetchAll(response) {
        const checkpoints = await this.checkpointService.findAll();
        return response.status(common_1.HttpStatus.OK).json({
            checkpoints
        });
    }
    async findById(response, id) {
        const checkpoint = await this.checkpointService.findOne(id);
        return response.status(common_1.HttpStatus.OK).json({
            checkpoint
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, checkpoint_entity_1.Checkpoint]),
    __metadata("design:returntype", Promise)
], CheckpointsController.prototype, "createCheckpoint", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CheckpointsController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CheckpointsController.prototype, "findById", null);
CheckpointsController = __decorate([
    (0, common_1.Controller)('checkpoints'),
    __metadata("design:paramtypes", [checkpoints_service_1.CheckpointsService])
], CheckpointsController);
exports.CheckpointsController = CheckpointsController;
//# sourceMappingURL=checkpoints.controller.js.map