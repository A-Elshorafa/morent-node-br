import { Inject } from "@nestjs/common";
import { Location } from "src/domain/entities/location.entity";
import { CreateLocationDto } from "src/application/dtos/location/create-location.dto";
import * as LocationRepo from "src/domain/repositories/location.repository";

export class CreateLocationUseCase {
    constructor(
        @Inject('ILocationRepository')
        private readonly locationRepository: LocationRepo.ILocationRepository,
    ) { }

    async execute(location: CreateLocationDto): Promise<Location> {
        console.log("locationRepo: ");
        console.log(this.locationRepository);
        return this.locationRepository.create(location);
    }
}