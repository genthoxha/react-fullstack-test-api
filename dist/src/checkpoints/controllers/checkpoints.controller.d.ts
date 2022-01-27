import { CheckpointsService } from '../services/checkpoints.service';
import { Checkpoint } from '../entities/checkpoint.entity';
export declare class CheckpointsController {
    private readonly checkpointService;
    constructor(checkpointService: CheckpointsService);
    createCheckpoint(response: any, checkpoint: Checkpoint): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
}
