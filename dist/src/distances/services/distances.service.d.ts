import { Repository } from 'typeorm/index';
import { Distance } from '../entities/distances.entity';
export declare class DistancesService {
    private distanceRepository;
    constructor(distanceRepository: Repository<Distance>);
    findAll(): Promise<Distance[]>;
    findOne(id: string): Promise<Distance>;
    createDistance(distance: Partial<Distance>): Promise<Distance>;
}
