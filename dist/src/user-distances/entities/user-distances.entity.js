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
exports.UserDistances = void 0;
const typeorm_1 = require("typeorm");
const distances_entity_1 = require("../../distances/entities/distances.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const index_1 = require("typeorm/index");
let UserDistances = class UserDistances {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserDistances.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => distances_entity_1.Distance),
    __metadata("design:type", distances_entity_1.Distance)
], UserDistances.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users),
    __metadata("design:type", users_entity_1.Users)
], UserDistances.prototype, "user", void 0);
__decorate([
    (0, index_1.Column)({ type: 'int' }),
    __metadata("design:type", String)
], UserDistances.prototype, "checkpointId", void 0);
UserDistances = __decorate([
    (0, typeorm_1.Entity)()
], UserDistances);
exports.UserDistances = UserDistances;
//# sourceMappingURL=user-distances.entity.js.map