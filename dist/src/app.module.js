"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const distances_module_1 = require("./distances/distances.module");
const checkpoints_module_1 = require("./checkpoints/checkpoints.module");
const user_distances_module_1 = require("./user-distances/user-distances.module");
const nestjs_config_1 = require("nestjs-config");
const user_checkpoints_module_1 = require("./user-checkpoints/user-checkpoints.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_config_1.ConfigModule.load("dist/**/*.config.js", {
                modifyConfigName: name => name.replace(".config", "")
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => configService.get("app.database"),
                inject: [nestjs_config_1.ConfigService]
            }),
            users_module_1.UsersModule, distances_module_1.DistancesModule, checkpoints_module_1.CheckpointsModule, user_distances_module_1.UserDistancesModule, user_checkpoints_module_1.UserCheckpointsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map