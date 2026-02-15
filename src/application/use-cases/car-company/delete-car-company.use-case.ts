import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICarCompanyRepository } from 'src/domain/repositories/car-company.repository';

@Injectable()
export class DeleteCarCompanyUseCase {
    constructor(
        @Inject('ICarCompanyRepository')
        private readonly carCompanyRepository: ICarCompanyRepository,
    ) { }

    async execute(id: number): Promise<boolean> {
        const carCompany = await this.carCompanyRepository.findOne(id);
        if (!carCompany) {
            throw new NotFoundException(`CarCompany with ID ${id} not found`);
        }
        return this.carCompanyRepository.delete(id);
    }
}
