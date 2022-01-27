"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDistancesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_distances_entity_1 = require("./entities/user-distances.entity");
const user_distances_service_1 = require("./services/user-distances.service");
const user_distances_controller_1 = require("./controllers/user-distances.controller");
const users_entity_1 = require("../users/entities/users.entity");
const distances_entity_1 = require("../distances/entities/distances.entity");
const users_service_1 = require("../users/services/users.service");
const distances_service_1 = require("../distances/services/distances.service");
const checkpoint_entity_1 = require("../checkpoints/entities/checkpoint.entity");
const checkpoints_service_1 = require("../checkpoints/services/checkpoints.service");
let UserDistancesModule = class UserDistancesModule {
};
UserDistancesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_distances_entity_1.UserDistances, users_entity_1.Users, distances_entity_1.Distance, checkpoint_entity_1.Checkpoint])],
        controllers: [user_distances_controller_1.UserDistancesController],
        providers: [user_distances_service_1.UserDistancesService, users_service_1.UsersService, distances_service_1.DistancesService, checkpoints_service_1.CheckpointsService]
    })
], UserDistancesModule);
exports.UserDistancesModule = UserDistancesModule;
//# sourceMappingURL=user-distances.module.js.map