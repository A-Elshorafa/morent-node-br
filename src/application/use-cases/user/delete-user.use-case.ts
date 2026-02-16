import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { IUserRepository } from 'src/domain/repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
    ) { }

    async execute(id: number): Promise<boolean> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return this.userRepository.delete(id);
    }
}
