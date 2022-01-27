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
exports.UserCheckpointsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const index_1 = require("typeorm/index");
const user_checkpoints_entity_1 = require("../entities/user-checkpoints.entity");
const users_service_1 = require("../../users/services/users.service");
const checkpoints_service_1 = require("../../checkpoints/services/checkpoints.service");
let UserCheckpointsService = class UserCheckpointsService {
    constructor(userCheckpointRepository, usersService, checkPointService) {
        this.userCheckpointRepository = userCheckpointRepository;
        this.usersService = usersService;
        this.checkPointService = checkPointService;
    }
    findAll() {
        return this.userCheckpointRepository.find();
    }
    findOne(id) {
        return this.userCheckpointRepository.findOne(id);
    }
    createUserCheckpoint(userCheckpoint) {
        return this.userCheckpointRepository.save(userCheckpoint);
    }
    async addCheckpointsToUsers() {
        const users = await this.usersService.findAll();
        const checkpoints = await this.checkPointService.findAll();
        return checkpoints.map(checkpoint => {
            users.map((user) => {
                this.userCheckpointRepository.save({
                    user,
                    checkpoint
                });
            });
        });
    }
};
UserCheckpointsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_checkpoints_entity_1.UserCheckpoints)),
    __metadata("design:paramtypes", [index_1.Repository,
        users_service_1.UsersService,
        checkpoints_service_1.CheckpointsService])
], UserCheckpointsService);
exports.UserCheckpointsService = UserCheckpointsService;
//# sourceMappingURL=user-checkpoints.service.js.map