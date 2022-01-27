"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistancesModule = void 0;
const common_1 = require("@nestjs/common");
const distances_service_1 = require("./services/distances.service");
const typeorm_1 = require("@nestjs/typeorm");
const distances_entity_1 = require("./entities/distances.entity");
const distances_controller_1 = require("./controllers/distances.controller");
let DistancesModule = class DistancesModule {
};
DistancesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([distances_entity_1.Distance])],
        controllers: [distances_controller_1.DistancesController],
        providers: [distances_service_1.DistancesService]
    })
], DistancesModule);
exports.DistancesModule = DistancesModule;
//# sourceMappingURL=distances.module.js.map