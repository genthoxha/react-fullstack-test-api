import { Repository } from 'typeorm/index';
import { UserCheckpoints } from '@app/user-checkpoints/entities/user-checkpoints.entity';
import { UsersService } from '@app/users/services/users.service';
import { CheckpointsService } from '@app/checkpoints/services/checkpoints.service';
export declare class UserCheckpointsService {
    private userCheckpointRepository;
    private usersService;
    private checkPointService;
    constructor(userCheckpointRepository: Repository<UserCheckpoints>, usersService: UsersService, checkPointService: CheckpointsService);
    findAll(): Promise<UserCheckpoints[]>;
    findOne(id: string): Promise<UserCheckpoints>;
    createUserCheckpoint(userCheckpoint: UserCheckpoints): Promise<UserCheckpoints>;
    addCheckpointsToUsers(): Promise<void[]>;
}
