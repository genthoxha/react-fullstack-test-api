import { Distance } from '@app/distances/entities/distances.entity';
import { Users } from '@app/users/entities/users.entity';
export declare class UserDistances {
    id: number;
    distance: Distance;
    user: Users;
    checkpointId: string;
}
