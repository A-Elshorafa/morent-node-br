import { Inject, Injectable } from '@nestjs/common';
import type { ICarCompanyRepository } from 'src/domain/repositories/car-company.repository';
import { CarCompany } from 'src/domain/entities/car-company';

@Injectable()
export class GetCarCompaniesUseCase {
    constructor(
        @Inject('ICarCompanyRepository')
        private readonly carCompanyRepository: ICarCompanyRepository,
    ) { }

    async execute(): Promise<CarCompany[]> {
        return this.carCompanyRepository.findAll();
    }
}
