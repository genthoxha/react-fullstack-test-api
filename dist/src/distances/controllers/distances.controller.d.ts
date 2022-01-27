import { DistancesService } from '../services/distances.service';
import { Distance } from '../entities/distances.entity';
export declare class DistancesController {
    private readonly distancesService;
    constructor(distancesService: DistancesService);
    createDistance(response: any, Users: Distance): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
}
