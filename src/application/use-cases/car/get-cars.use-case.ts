import { Inject, Injectable } from '@nestjs/common';
import type { ICarRepository } from '../../../domain/repositories/car.repository.interface';
import { Car } from '../../../domain/entities/car.entity';

@Injectable()
export class GetCarsUseCase {
    constructor(
        @Inject('ICarRepository')
        private readonly carRepository: ICarRepository,
    ) { }

    async execute(): Promise<Car[]> {
        return this.carRepository.findAll();
    }
}
