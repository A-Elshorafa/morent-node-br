import { Controller, Post, Body, Get, Patch, Delete, Param } from "@nestjs/common";
import { CreateCarTypeUseCase } from "src/application/use-cases/car-type/create-car-type.use-case";
import { CreateCarTypeDto } from "src/application/dtos/car-type/create-car-type.dto";
import { CarTypeItemDto } from "src/application/dtos/car-type/create-car-type-item.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { GetCarTypesUseCase } from "src/application/use-cases/car-type/get-car-types.use-case";
import { GetCarTypeUseCase } from "src/application/use-cases/car-type/get-car-type.use-case";
import { UpdateCarTypeUseCase } from "src/application/use-cases/car-type/update-car-type.use-case";
import { DeleteCarTypeUseCase } from "src/application/use-cases/car-type/delete-car-type.use-case";
import { UpdateCarTypeDto } from "src/application/dtos/car-type/update-car-type.dto";

@Controller('car-type')
export class CarTypeController {
    constructor(
        private readonly createCarTypeUseCase: CreateCarTypeUseCase,
        private readonly getCarTypesUseCase: GetCarTypesUseCase,
        private readonly getCarTypeUseCase: GetCarTypeUseCase,
        private readonly updateCarTypeUseCase: UpdateCarTypeUseCase,
        private readonly deleteCarTypeUseCase: DeleteCarTypeUseCase,
    ) { }

    @Post()
    @ApiOperation({ summary: 'Create a new car type' })
    @ApiResponse({ status: 201, description: 'The car type has been successfully created.', type: CarTypeItemDto })
    async create(@Body() carType: CreateCarTypeDto): Promise<CarTypeItemDto> {
        return this.createCarTypeUseCase.execute(carType);
    }

    @Get()
    @ApiOperation({ summary: 'Get all car types' })
    @ApiResponse({ status: 200, description: 'The car types have been successfully retrieved.', type: CarTypeItemDto, isArray: true })
    async findAll(): Promise<CarTypeItemDto[]> {
        return this.getCarTypesUseCase.execute();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a car type by ID' })
    @ApiResponse({ status: 200, description: 'The car type has been successfully retrieved.', type: CarTypeItemDto })
    async findOne(@Param('id') id: number): Promise<CarTypeItemDto> {
        return this.getCarTypeUseCase.execute(id);
    }

    @Patch(':carTypeId')
    @ApiOperation({ summary: 'Update a car type' })
    @ApiResponse({ status: 200, description: 'The car type has been successfully updated.', type: CarTypeItemDto })
    async update(@Param('carTypeId') carTypeId: number, @Body() carType: UpdateCarTypeDto): Promise<CarTypeItemDto> {
        console.log("carTypeId: ");
        console.log(carTypeId);
        console.log("carType: ");
        console.log(carType);
        return this.updateCarTypeUseCase.execute(carTypeId, carType);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a car type' })
    @ApiResponse({ status: 200, description: 'The car type has been successfully deleted.', type: Boolean })
    async delete(@Param('id') id: number): Promise<boolean> {
        return this.deleteCarTypeUseCase.execute(id) ?? false;
    }
}