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
exports.DistancesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const index_1 = require("typeorm/index");
const distances_entity_1 = require("../entities/distances.entity");
let DistancesService = class DistancesService {
    constructor(distanceRepository) {
        this.distanceRepository = distanceRepository;
    }
    findAll() {
        return this.distanceRepository.find();
    }
    findOne(id) {
        return this.distanceRepository.findOne(id);
    }
    async createDistance(distance) {
        return this.distanceRepository.save(distance);
    }
};
DistancesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(distances_entity_1.Distance)),
    __metadata("design:paramtypes", [index_1.Repository])
], DistancesService);
exports.DistancesService = DistancesService;
//# sourceMappingURL=distances.service.js.map