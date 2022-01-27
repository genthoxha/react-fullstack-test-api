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
exports.UserDistancesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../../users/entities/users.entity");
const index_1 = require("typeorm/index");
const user_distances_entity_1 = require("../entities/user-distances.entity");
const users_service_1 = require("../../users/services/users.service");
const distances_service_1 = require("../../distances/services/distances.service");
const checkpoints_service_1 = require("../../checkpoints/services/checkpoints.service");
const checkpoint_entity_1 = require("../../checkpoints/entities/checkpoint.entity");
const distances_entity_1 = require("../../distances/entities/distances.entity");
const utils_1 = require("../../utils/utils");
let UserDistancesService = class UserDistancesService {
    constructor(userDistanceRepository, usersRepository, userService, distanceService, checkPointService) {
        this.userDistanceRepository = userDistanceRepository;
        this.usersRepository = usersRepository;
        this.userService = userService;
        this.distanceService = distanceService;
        this.checkPointService = checkPointService;
    }
    async findAll() {
        return this.userDistanceRepository.find();
    }
    findOne(id) {
        return this.userDistanceRepository.findOne(id);
    }
    async calculateDistancesForAllUsers() {
        const users = await this.userService.findAll();
        const checkPoints = await this.checkPointService.findAll();
        const userDistances = [];
        await Promise.all(await checkPoints.map(async (checkpoint) => {
            await users.map(async (user) => {
                const { currentLatitude, currentLongitude, homeLatitude, homeLongitude, } = user;
                const distanceFromUserToHome = utils_1.Utils.calculateDistance(currentLatitude, currentLongitude, homeLatitude, homeLongitude);
                const { latitude, longitude, id } = checkpoint;
                const distanceFromHomeToCheckpoint = utils_1.Utils.calculateDistance(homeLatitude, homeLongitude, latitude, longitude);
                const distance = {
                    value: distanceFromUserToHome +
                        distanceFromHomeToCheckpoint +
                        distanceFromHomeToCheckpoint,
                };
                userDistances.push({
                    user,
                    distance,
                    checkpointId: id,
                });
            });
        }));
        await Promise.all(userDistances.map(async (userDistances) => {
            const distance = await this.distanceService.createDistance(userDistances.distance);
            await this.createUserDistance({
                distance,
                user: userDistances.user,
                checkpointId: userDistances.checkpointId,
            });
        }));
    }
    async getUDistanceFromLocationToCheckpoint(body) {
        const { latitude, longitude, checkpointId } = body;
        const checkpoint = await this.checkPointService.findOne(checkpointId);
        return utils_1.Utils.calculateDistance(latitude, longitude, checkpoint.latitude, checkpoint.longitude);
    }
    async getUserRankingByCheckpointId(id) {
        const rawResult = await this.userDistanceRepository
            .createQueryBuilder('ud')
            .innerJoinAndSelect(checkpoint_entity_1.Checkpoint, 'checkpoints', 'checkpoints.id = ud.checkpointId')
            .innerJoinAndSelect(users_entity_1.Users, 'users', 'users.id = ud.userId')
            .innerJoinAndSelect(distances_entity_1.Distance, 'distances', 'ud.distanceId = distances.id')
            .addSelect('checkpoints.id', "checkpointId")
            .addSelect('users.homeLatitude', 'homeLatitude')
            .addSelect('users.homeLongitude', 'homeLongitude')
            .addSelect('users.username', 'username')
            .addSelect('users.currentLatitude', 'currentLatitude')
            .addSelect('users.currentLongitude', 'currentLongitude')
            .addSelect('checkpoints.latitude', 'checkpointLatitude')
            .addSelect('checkpoints.longitude', 'checkpointLongitude')
            .addSelect('distances.value', 'distance')
            .where('ud.checkpointId = :id', { id })
            .orderBy('distances.value', 'DESC')
            .distinct(true)
            .getRawMany();
        return rawResult.map((rawData) => {
            delete rawData.ud_checkpointId;
            delete rawData.ud_distanceId;
            delete rawData.ud_id;
            delete rawData.ud_userId;
            delete rawData.users_username;
            return rawData;
        });
    }
    async createUserDistance(userDistance) {
        const oldUserDistance = await this.userDistanceRepository.find({ checkpointId: userDistance.checkpointId });
        if (oldUserDistance.length === 0) {
            return this.userDistanceRepository.save(userDistance);
        }
    }
};
UserDistancesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_distances_entity_1.UserDistances)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [index_1.Repository,
        index_1.Repository,
        users_service_1.UsersService,
        distances_service_1.DistancesService,
        checkpoints_service_1.CheckpointsService])
], UserDistancesService);
exports.UserDistancesService = UserDistancesService;
//# sourceMappingURL=user-distances.service.js.map