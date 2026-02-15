import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ILocationRepository } from 'src/domain/repositories/location.repository';

@Injectable()
export class DeleteLocationUseCase {
    constructor(
        @Inject('ILocationRepository')
        private readonly locationRepository: ILocationRepository,
    ) { }

    async execute(id: number): Promise<boolean> {
        const location = await this.locationRepository.findOne(id);
        if (!location) {
            throw new NotFoundException(`Location with ID ${id} not found`);
        }
        return this.locationRepository.delete(id);
    }
}
