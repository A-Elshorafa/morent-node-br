import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarRepository } from '../../../domain/repositories/car.repository.interface';
import { UpdateCarDto } from '../../dtos/car/update-car.dto';
import { Car } from '../../../domain/entities/car.entity';

@Injectable()
export class UpdateCarUseCase {
    constructor(
        @Inject('ICarRepository')
        private readonly carRepository: ICarRepository,
    ) { }

    async execute(id: number, dto: UpdateCarDto): Promise<Car> {
        const existingCar = await this.carRepository.findOne(id);
        if (!existingCar) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }

        // Simple object assign for now. Ideally validation should be here or in DTO.
        Object.assign(existingCar, dto);

        return this.carRepository.update(id, existingCar);
    }
}
