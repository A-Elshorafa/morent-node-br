import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateCarTypeDto } from "src/application/dtos/car-type/update-car-type.dto";
import { CarType } from "src/domain/entities/car-type.entity";
import { ICarTypeRepository } from "src/domain/repositories/car-type.repository";
import { Repository } from "typeorm";

@Injectable()
export class CarTypeRepository implements ICarTypeRepository {
    constructor(
        @InjectRepository(CarType)
        private readonly repository: Repository<CarType>,
    ) { }

    async create(carType: CarType): Promise<CarType> {
        return this.repository.save(carType);
    }

    async findAll(): Promise<CarType[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<CarType | null> {
        return this.repository.findOne({ where: { CarTypeId: id } });
    }

    async update(carTypeId: number, carType: Partial<UpdateCarTypeDto>): Promise<CarType> {
        console.log("carType: ");
        console.log(carType);
        await this.repository.update(carTypeId, carType);
        return this.repository.findOne({ where: { CarTypeId: carTypeId } }) as Promise<CarType>;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return !!result;
    }
}