import { Users } from '@app/users/entities/users.entity';
import { Repository } from 'typeorm/index';
import { UserDistances } from '../entities/user-distances.entity';
import { UsersService } from '@app/users/services/users.service';
import { DistancesService } from '@app/distances/services/distances.service';
import { CheckpointsService } from '@app/checkpoints/services/checkpoints.service';
import { CalculateDistanceByCurrentLocationDto } from '@app/user-distances/dto/CalculateDistanceByCurrentLocationDto';
export declare class UserDistancesService {
    private userDistanceRepository;
    private usersRepository;
    private userService;
    private distanceService;
    private checkPointService;
    constructor(userDistanceRepository: Repository<UserDistances>, usersRepository: Repository<Users>, userService: UsersService, distanceService: DistancesService, checkPointService: CheckpointsService);
    findAll(): Promise<UserDistances[]>;
    findOne(id: string): Promise<UserDistances>;
    calculateDistancesForAllUsers(): Promise<void>;
    getUDistanceFromLocationToCheckpoint(body: CalculateDistanceByCurrentLocationDto): Promise<number>;
    getUserRankingByCheckpointId(id: any): Promise<any[]>;
    createUserDistance(userDistance: Partial<UserDistances>): Promise<UserDistances>;
}
