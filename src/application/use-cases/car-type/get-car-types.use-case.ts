import { Inject, Injectable } from '@nestjs/common';
import type { ICarTypeRepository } from '../../../domain/repositories/car-type.repository';
import { CarType } from '../../../domain/entities/car-type.entity';

@Injectable()
export class GetCarTypesUseCase {
    constructor(
        @Inject('ICarTypeRepository')
        private readonly carTypeRepository: ICarTypeRepository,
    ) { }

    async execute(): Promise<CarType[]> {
        return this.carTypeRepository.findAll();
    }
}
