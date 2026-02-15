import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateLocationDto } from "src/application/dtos/location/update-location.dto";
import { Location } from "src/domain/entities/location.entity";
import { ILocationRepository } from "src/domain/repositories/location.repository";
import { Repository } from "typeorm";

@Injectable()
export class LocationRepository implements ILocationRepository {
    constructor(
        @InjectRepository(Location)
        private readonly repository: Repository<Location>,
    ) { }

    async create(location: Location): Promise<Location> {
        return this.repository.save(location);
    }

    async findAll(): Promise<Location[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<Location | null> {
        return this.repository.findOne({ where: { LocationId: id } });
    }

    async update(locationId: number, location: Partial<UpdateLocationDto>): Promise<Location> {
        await this.repository.update(locationId, location);
        return this.repository.findOne({ where: { LocationId: locationId } }) as Promise<Location>;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return !!result;
    }
}