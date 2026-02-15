import { Location } from "../entities/location.entity";
import { UpdateLocationDto } from "../../application/dtos/location/update-location.dto";

export interface ILocationRepository {
    create(location: Location): Promise<Location>;
    findAll(): Promise<Location[]>;
    findOne(id: number): Promise<Location | null>;
    update(locationId: number, location: Partial<UpdateLocationDto>): Promise<Location>;
    delete(id: number): Promise<boolean>;
}