import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarCompanyRepository } from 'src/domain/repositories/car-company.repository';
import { UpdateCarCompanyDto } from 'src/application/dtos/car-company/update-car-company.dto';
import { CarCompany } from 'src/domain/entities/car-company';

@Injectable()
export class UpdateCarCompanyUseCase {
    constructor(
        @Inject('ICarCompanyRepository')
        private readonly carCompanyRepository: ICarCompanyRepository,
    ) { }

    async execute(carCompanyId: number, dto: UpdateCarCompanyDto): Promise<CarCompany> {
        const existingCarCompany = await this.carCompanyRepository.findOne(carCompanyId);
        if (!existingCarCompany) {
            throw new NotFoundException(`CarCompany with ID ${carCompanyId} not found`);
        }

        return this.carCompanyRepository.update(carCompanyId, dto);
    }
}
