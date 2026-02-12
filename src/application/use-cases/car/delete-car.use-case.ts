import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarRepository } from '../../../domain/repositories/car.repository.interface';

@Injectable()
export class DeleteCarUseCase {
    constructor(
        @Inject('ICarRepository')
        private readonly carRepository: ICarRepository,
    ) { }

    async execute(id: number): Promise<void> {
        const car = await this.carRepository.findOne(id);
        if (!car) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }
        return this.carRepository.delete(id);
    }
}
