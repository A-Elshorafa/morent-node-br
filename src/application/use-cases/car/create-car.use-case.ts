import { Inject, Injectable } from '@nestjs/common';
import type { ICarRepository } from '../../../domain/repositories/car.repository.interface';
import { CreateCarDto } from '../../dtos/car/create-car.dto';
import { Car } from '../../../domain/entities/car.entity';

@Injectable()
export class CreateCarUseCase {
    constructor(
        @Inject('ICarRepository')
        private readonly carRepository: ICarRepository,
    ) { }

    async execute(dto: CreateCarDto): Promise<Car> {
        const car = new Car();
        Object.assign(car, dto);
        return this.carRepository.create(car);
    }
}
