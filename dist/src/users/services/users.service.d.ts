import { Repository } from "typeorm";
import { Users } from '../entities/users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(): Promise<Users[]>;
    findOne(id: string): Promise<Users>;
    createUser(user: Users): Promise<Users>;
}
