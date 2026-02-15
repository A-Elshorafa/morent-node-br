import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarTypeRepository } from '../../../domain/repositories/car-type.repository';
import { UpdateCarTypeDto } from '../../dtos/car-type/update-car-type.dto';
import { CarType } from '../../../domain/entities/car-type.entity';

@Injectable()
export class UpdateCarTypeUseCase {
    constructor(
        @Inject('ICarTypeRepository')
        private readonly carTypeRepository: ICarTypeRepository,
    ) { }

    async execute(carTypeId: number, dto: UpdateCarTypeDto): Promise<CarType> {
        const existingCar = await this.carTypeRepository.findOne(carTypeId);
        if (!existingCar) {
            throw new NotFoundException(`Car with ID ${carTypeId} not found`);
        }

        return this.carTypeRepository.update(carTypeId, dto);
    }
}
