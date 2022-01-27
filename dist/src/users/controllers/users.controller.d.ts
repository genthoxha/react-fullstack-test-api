import { Users } from "../entities/users.entity";
import { UsersService } from "../services/users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(response: any, user: Users): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
}
