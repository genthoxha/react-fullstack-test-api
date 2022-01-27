"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCheckpointsModule = void 0;
const common_1 = require("@nestjs/common");
const user_checkpoints_service_1 = require("./services/user-checkpoints.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const checkpoint_entity_1 = require("../checkpoints/entities/checkpoint.entity");
const user_checkpoints_entity_1 = require("./entities/user-checkpoints.entity");
const user_checkpoints_controller_1 = require("./controllers/user-checkpoints.controller");
const users_service_1 = require("../users/services/users.service");
const checkpoints_service_1 = require("../checkpoints/services/checkpoints.service");
let UserCheckpointsModule = class UserCheckpointsModule {
};
UserCheckpointsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_checkpoints_entity_1.UserCheckpoints, users_entity_1.Users, checkpoint_entity_1.Checkpoint])],
        controllers: [user_checkpoints_controller_1.UserCheckpointsController],
        providers: [user_checkpoints_service_1.UserCheckpointsService, users_service_1.UsersService, checkpoints_service_1.CheckpointsService]
    })
], UserCheckpointsModule);
exports.UserCheckpointsModule = UserCheckpointsModule;
//# sourceMappingURL=user-checkpoints.module.js.map