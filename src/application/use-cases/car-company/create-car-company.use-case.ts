import { Inject } from "@nestjs/common";
import { CreateCarCompanyDto } from "src/application/dtos/car-company/create-car-company.dto";
import { CarCompany } from "src/domain/entities/car-company";
import type { ICarCompanyRepository } from "src/domain/repositories/car-company.repository";

export class CreateCarCompanyUseCase {
    constructor(
        @Inject('ICarCompanyRepository')
        private readonly carCompanyRepository: ICarCompanyRepository,
    ) { }

    async execute(carCompany: CreateCarCompanyDto): Promise<CarCompany> {
        console.log("carCompanyRepo: ");
        console.log(this.carCompanyRepository);
        return this.carCompanyRepository.create(carCompany);
    }
}