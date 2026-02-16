import { User } from "src/domain/entities/user.entity";
import { UpdateUserDto } from "src/application/dtos/user/update-user.dto";
import { UserRepository } from "src/infrastructure/services/user.repository";
import { Inject } from "@nestjs/common";

export class UpdateUserUseCase {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: UserRepository
    ) { }

    async execute(user: UpdateUserDto): Promise<User> {
        return await this.userRepository.update(user);
    }
}