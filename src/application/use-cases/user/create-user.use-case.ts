import { User } from "src/domain/entities/user.entity";
import { CreateUserDto } from "src/application/dtos/user/create-user.dto";
import { UserRepository } from "src/infrastructure/services/user.repository";
import * as bcrypt from 'bcrypt';
import { Inject } from "@nestjs/common";

export class CreateUserUseCase {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: UserRepository
    ) { }

    async execute(user: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(user.Password, 10);
        user.PasswordHash = hashedPassword;

        return await this.userRepository.create(user);
    }
}