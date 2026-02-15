import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ILocationRepository } from '../../../domain/repositories/location.repository';
import { UpdateLocationDto } from '../../dtos/location/update-location.dto';
import { Location } from '../../../domain/entities/location.entity';

@Injectable()
export class UpdateLocationUseCase {
    constructor(
        @Inject('ILocationRepository')
        private readonly locationRepository: ILocationRepository,
    ) { }

    async execute(locationId: number, dto: UpdateLocationDto): Promise<Location> {
        const existingLocation = await this.locationRepository.findOne(locationId);
        if (!existingLocation) {
            throw new NotFoundException(`Location with ID ${locationId} not found`);
        }

        return this.locationRepository.update(locationId, dto);
    }
}
