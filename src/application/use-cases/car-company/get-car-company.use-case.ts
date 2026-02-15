import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarCompanyRepository } from 'src/domain/repositories/car-company.repository';
import { CarCompany } from 'src/domain/entities/car-company';

@Injectable()
export class GetCarCompanyUseCase {
    constructor(
        @Inject('ICarCompanyRepository')
        private readonly carCompanyRepository: ICarCompanyRepository,
    ) { }

    async execute(id: number): Promise<CarCompany> {
        const carCompany = await this.carCompanyRepository.findOne(id);
        if (!carCompany) {
            throw new NotFoundException(`CarCompany with ID ${id} not found`);
        }
        return carCompany;
    }
}
