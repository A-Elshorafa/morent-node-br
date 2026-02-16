import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/entities/user.entity";
import { CreateUserDto } from "src/application/dtos/user/create-user.dto";
import { UpdateUserDto } from "src/application/dtos/user/update-user.dto";

export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async create(user: CreateUserDto): Promise<User> {
        return await this.userRepository.save(user);
    }

    async update(user: UpdateUserDto): Promise<User> {
        return await this.userRepository.save(user);
    }

    async delete(userId: number): Promise<boolean> {
        const result = await this.userRepository.delete(userId);
        return !!result;
    }

    async findById(id: Number): Promise<User | null> {
        return await this.userRepository.findOne({ where: { UserId: id } });
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}