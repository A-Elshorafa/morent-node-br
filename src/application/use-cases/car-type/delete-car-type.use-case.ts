import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarTypeRepository } from '../../../domain/repositories/car-type.repository';

@Injectable()
export class DeleteCarTypeUseCase {
    constructor(
        @Inject('ICarTypeRepository')
        private readonly carTypeRepository: ICarTypeRepository,
    ) { }

    async execute(id: number): Promise<boolean> {
        const carType = await this.carTypeRepository.findOne(id);
        if (!carType) {
            throw new NotFoundException(`Car type with ID ${id} not found`);
        }
        return this.carTypeRepository.delete(id);
    }
}
