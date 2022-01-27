import { Repository } from 'typeorm/index';
import { Checkpoint } from '../entities/checkpoint.entity';
export declare class CheckpointsService {
    private checkpointRepository;
    constructor(checkpointRepository: Repository<Checkpoint>);
    findAll(): Promise<Checkpoint[]>;
    findOne(id: string): Promise<Checkpoint>;
    createCheckpoint(checkpoint: Checkpoint): Promise<Checkpoint>;
}
