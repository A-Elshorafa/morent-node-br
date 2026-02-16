import { CreateUserDto } from "src/application/dtos/user/create-user.dto";
import { User } from "../entities/user.entity";
import { UpdateUserDto } from "src/application/dtos/user/update-user.dto";

export interface IUserRepository {
    create(user: CreateUserDto): Promise<User>;
    update(user: UpdateUserDto): Promise<User>;
    delete(userId: number): Promise<boolean>;
    findById(id: Number): Promise<User>;
    findAll(): Promise<User[]>;
}