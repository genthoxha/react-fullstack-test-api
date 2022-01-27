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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCheckpoints = void 0;
const users_entity_1 = require("../../users/entities/users.entity");
const index_1 = require("typeorm/index");
const checkpoint_entity_1 = require("../../checkpoints/entities/checkpoint.entity");
let UserCheckpoints = class UserCheckpoints {
};
__decorate([
    (0, index_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserCheckpoints.prototype, "id", void 0);
__decorate([
    (0, index_1.ManyToOne)(() => checkpoint_entity_1.Checkpoint),
    __metadata("design:type", checkpoint_entity_1.Checkpoint)
], UserCheckpoints.prototype, "checkpoint", void 0);
__decorate([
    (0, index_1.ManyToOne)(() => users_entity_1.Users),
    __metadata("design:type", users_entity_1.Users)
], UserCheckpoints.prototype, "user", void 0);
UserCheckpoints = __decorate([
    (0, index_1.Entity)()
], UserCheckpoints);
exports.UserCheckpoints = UserCheckpoints;
//# sourceMappingURL=user-checkpoints.entity.js.map