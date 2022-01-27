"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckpointsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const checkpoint_entity_1 = require("./entities/checkpoint.entity");
const checkpoints_controller_1 = require("./controllers/checkpoints.controller");
const checkpoints_service_1 = require("./services/checkpoints.service");
let CheckpointsModule = class CheckpointsModule {
};
CheckpointsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([checkpoint_entity_1.Checkpoint])],
        controllers: [checkpoints_controller_1.CheckpointsController],
        providers: [checkpoints_service_1.CheckpointsService]
    })
], CheckpointsModule);
exports.CheckpointsModule = CheckpointsModule;
//# sourceMappingURL=checkpoints.module.js.map