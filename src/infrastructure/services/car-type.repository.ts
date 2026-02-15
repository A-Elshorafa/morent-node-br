import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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

    async update(id: number, carType: Partial<CarType>): Promise<CarType> {
        await this.repository.update(id, carType);
        return this.repository.findOne({ where: { CarTypeId: id } }) as Promise<CarType>;
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}