import { Users } from '@app/users/entities/users.entity';
import { Checkpoint } from '@app/checkpoints/entities/checkpoint.entity';
export declare class UserCheckpoints {
    id: number;
    checkpoint: Checkpoint;
    user: Users;
}
