import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCarCompanyDto } from "src/application/dtos/car-company/create-car-company.dto";
import { UpdateCarCompanyDto } from "src/application/dtos/car-company/update-car-company.dto";
import { CarCompany } from "src/domain/entities/car-company";
import { CreateCarCompanyUseCase } from "src/application/use-cases/car-company/create-car-company.use-case";
import { GetCarCompaniesUseCase } from "src/application/use-cases/car-company/get-car-companies.use-case";
import { UpdateCarCompanyUseCase } from "src/application/use-cases/car-company/update-car-company.use-case";
import { DeleteCarCompanyUseCase } from "src/application/use-cases/car-company/delete-car-company.use-case";
import { GetCarCompanyUseCase } from "src/application/use-cases/car-company/get-car-company.use-case";
import { ApiResponse } from "@nestjs/swagger";

@Controller('car-company')
export class CarCompanyController {
    constructor(
        private readonly createCarCompanyUseCase: CreateCarCompanyUseCase,
        private readonly getCarCompanyUseCase: GetCarCompanyUseCase,
        private readonly updateCarCompanyUseCase: UpdateCarCompanyUseCase,
        private readonly deleteCarCompanyUseCase: DeleteCarCompanyUseCase,
        private readonly getAllCarCompaniesUseCase: GetCarCompaniesUseCase,
    ) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The car company has been successfully created.', type: CarCompany })
    @ApiResponse({ status: 400, description: 'The car company has not been created.' })
    async create(@Body() carCompany: CreateCarCompanyDto): Promise<CarCompany> {
        return this.createCarCompanyUseCase.execute(carCompany);
    }

    @Get()
    @ApiResponse({ status: 200, description: 'The car companies have been successfully retrieved.', type: CarCompany, isArray: true })
    async findAll(): Promise<CarCompany[]> {
        return this.getAllCarCompaniesUseCase.execute();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'The car company has been successfully retrieved.', type: CarCompany })
    async findOne(@Param('id') id: number): Promise<CarCompany> {
        return this.getCarCompanyUseCase.execute(id);
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'The car company has been successfully updated.', type: CarCompany })
    async update(@Param('id') id: number, @Body() carCompany: UpdateCarCompanyDto): Promise<CarCompany> {
        return this.updateCarCompanyUseCase.execute(id, carCompany);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'The car company has been successfully deleted.', type: Boolean })
    async delete(@Param('id') id: number): Promise<boolean> {
        return this.deleteCarCompanyUseCase.execute(id);
    }
}