import { InjectRepository } from "@nestjs/typeorm";
import { CarCompany } from "src/domain/entities/car-company";
import { ICarCompanyRepository } from "src/domain/repositories/car-company.repository";
import { Repository } from "typeorm";
import { CreateCarCompanyDto } from "src/application/dtos/car-company/create-car-company.dto";
import { UpdateCarCompanyDto } from "src/application/dtos/car-company/update-car-company.dto";

export class CarCompanyRepository implements ICarCompanyRepository {
    constructor(
        @InjectRepository(CarCompany)
        private readonly repository: Repository<CarCompany>,
    ) { }

    async create(carCompany: CreateCarCompanyDto): Promise<CarCompany> {
        return this.repository.save(carCompany);
    }

    async findAll(): Promise<CarCompany[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<CarCompany | null> {
        return this.repository.findOne({ where: { CarCompanyId: id } });
    }

    async update(carCompanyId: number, carCompany: Partial<UpdateCarCompanyDto>): Promise<CarCompany> {
        await this.repository.update(carCompanyId, carCompany);
        return this.repository.findOne({ where: { CarCompanyId: carCompanyId } }) as Promise<CarCompany>;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return !!result;
    }
}