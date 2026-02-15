import { CarType } from "../entities/car-type.entity";
import { CreateCarTypeDto } from "src/application/dtos/car-type/create-car-type.dto";
import { CarTypeItemDto } from "src/application/dtos/car-type/create-car-type-item.dto";

export interface ICarTypeRepository {
    create(carType: CreateCarTypeDto): Promise<CarTypeItemDto>;
    findAll(): Promise<CarType[]>;
    findOne(id: number): Promise<CarType | null>;
    update(id: number, carType: Partial<CarType>): Promise<CarType>;
    delete(id: number): Promise<void>;
}