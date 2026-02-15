import { Inject, Injectable } from '@nestjs/common';
import type { ILocationRepository } from '../../../domain/repositories/location.repository';
import { Location } from '../../../domain/entities/location.entity';

@Injectable()
export class GetLocationsUseCase {
    constructor(
        @Inject('ILocationRepository')
        private readonly locationRepository: ILocationRepository,
    ) { }

    async execute(): Promise<Location[]> {
        return this.locationRepository.findAll();
    }
}
