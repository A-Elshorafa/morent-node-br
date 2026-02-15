import { Controller, Post, Body } from "@nestjs/common";
import { CreateCarTypeUseCase } from "src/application/use-cases/car-type/create-car-type.use-case";
import { CreateCarTypeDto } from "src/application/dtos/car-type/create-car-type.dto";
import { CarTypeItemDto } from "src/application/dtos/car-type/create-car-type-item.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('car-type')
export class CarTypeController {
    constructor(
        private readonly createCarTypeUseCase: CreateCarTypeUseCase,
    ) { }

    @Post()
    @ApiOperation({ summary: 'Create a new car type' })
    @ApiResponse({ status: 201, description: 'The car type has been successfully created.', type: CarTypeItemDto })
    async create(@Body() carType: CreateCarTypeDto): Promise<CarTypeItemDto> {
        return this.createCarTypeUseCase.execute(carType);
    }
}