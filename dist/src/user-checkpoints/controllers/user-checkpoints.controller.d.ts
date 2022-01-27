import { UserCheckpointsService } from '@app/user-checkpoints/services/user-checkpoints.service';
import { UserCheckpoints } from '@app/user-checkpoints/entities/user-checkpoints.entity';
export declare class UserCheckpointsController {
    private readonly userCheckpointService;
    constructor(userCheckpointService: UserCheckpointsService);
    createCheckpoint(response: any, userCheckpoint: UserCheckpoints): Promise<any>;
    fetchAll(response: any): Promise<any>;
    addCheckpointToUsers(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
}
