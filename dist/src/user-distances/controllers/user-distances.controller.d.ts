import { UserDistancesService } from '../services/user-distances.service';
import { UserDistances } from '../entities/user-distances.entity';
export declare class UserDistancesController {
    private readonly userDistancesService;
    constructor(userDistancesService: UserDistancesService);
    createDistance(response: any, userDistance: UserDistances): Promise<any>;
    fetchAll(response: any): Promise<any>;
    calculateUserDistances(response: any): Promise<any>;
    calculateUserDistancesByCurrentLocation(response: any, body: any): Promise<any>;
    getUserRankingByCheckpoint(response: any, id: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
}
