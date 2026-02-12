import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarRepository } from '../../../domain/repositories/car.repository.interface';
import { Car } from '../../../domain/entities/car.entity';

@Injectable()
export class GetCarUseCase {
    constructor(
        @Inject('ICarRepository')
        private readonly carRepository: ICarRepository,
    ) { }

    async execute(id: number): Promise<Car> {
        const car = await this.carRepository.findOne(id);
        if (!car) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }
        return car;
    }
}
