import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ILocationRepository } from '../../../domain/repositories/location.repository';
import { Location } from '../../../domain/entities/location.entity';

@Injectable()
export class GetLocationUseCase {
    constructor(
        @Inject('ILocationRepository')
        private readonly locationRepository: ILocationRepository,
    ) { }

    async execute(id: number): Promise<Location> {
        const location = await this.locationRepository.findOne(id);
        if (!location) {
            throw new NotFoundException(`Location with ID ${id} not found`);
        }
        return location;
    }
}
