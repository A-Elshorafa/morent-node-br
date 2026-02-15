import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarTypeRepository } from '../../../domain/repositories/car-type.repository';
import { CarType } from '../../../domain/entities/car-type.entity';

@Injectable()
export class GetCarTypeUseCase {
    constructor(
        @Inject('ICarTypeRepository')
        private readonly carTypeRepository: ICarTypeRepository,
    ) { }

    async execute(id: number): Promise<CarType> {
        const carType = await this.carTypeRepository.findOne(id);
        if (!carType) {
            throw new NotFoundException(`Car type with ID ${id} not found`);
        }
        return carType;
    }
}
