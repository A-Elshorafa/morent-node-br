import { CreateCarCompanyDto } from "src/application/dtos/car-company/create-car-company.dto";
import { UpdateCarCompanyDto } from "src/application/dtos/car-company/update-car-company.dto";
import { CarCompany } from "../entities/car-company";

export interface ICarCompanyRepository {
    create(carCompany: CreateCarCompanyDto): Promise<CarCompany>;
    findAll(): Promise<CarCompany[]>;
    findOne(id: number): Promise<CarCompany | null>;
    update(carCompanyId: number, carCompany: Partial<UpdateCarCompanyDto>): Promise<CarCompany>;
    delete(id: number): Promise<boolean>;
}