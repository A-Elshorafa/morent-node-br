import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCarUseCase } from '../../application/use-cases/car/create-car.use-case';
import { GetCarsUseCase } from '../../application/use-cases/car/get-cars.use-case';
import { GetCarUseCase } from '../../application/use-cases/car/get-car.use-case';
import { UpdateCarUseCase } from '../../application/use-cases/car/update-car.use-case';
import { DeleteCarUseCase } from '../../application/use-cases/car/delete-car.use-case';
import { CreateCarDto } from '../../application/dtos/car/create-car.dto';
import { UpdateCarDto } from '../../application/dtos/car/update-car.dto';
import { Car } from '../../domain/entities/car.entity';

@ApiTags('Cars')
@Controller('cars')
export class CarController {
    constructor(
        private readonly createCarUseCase: CreateCarUseCase,
        private readonly getCarsUseCase: GetCarsUseCase,
        private readonly getCarUseCase: GetCarUseCase,
        private readonly updateCarUseCase: UpdateCarUseCase,
        private readonly deleteCarUseCase: DeleteCarUseCase,
    ) { }

    @Post()
    @ApiOperation({ summary: 'Create a new car' })
    @ApiResponse({ status: 201, description: 'The car has been successfully created.', type: Car })
    create(@Body() createCarDto: CreateCarDto): Promise<Car> {
        return this.createCarUseCase.execute(createCarDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all cars' })
    @ApiResponse({ status: 200, description: 'Return all cars.', type: [Car] })
    findAll(): Promise<Car[]> {
        return this.getCarsUseCase.execute();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a car by ID' })
    @ApiResponse({ status: 200, description: 'Return the car.', type: Car })
    @ApiResponse({ status: 404, description: 'Car not found.' })
    findOne(@Param('id') id: string): Promise<Car> {
        return this.getCarUseCase.execute(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a car' })
    @ApiResponse({ status: 200, description: 'The car has been successfully updated.', type: Car })
    @ApiResponse({ status: 404, description: 'Car not found.' })
    update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto): Promise<Car> {
        return this.updateCarUseCase.execute(+id, updateCarDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a car' })
    @ApiResponse({ status: 200, description: 'The car has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Car not found.' })
    remove(@Param('id') id: string): Promise<void> {
        return this.deleteCarUseCase.execute(+id);
    }
}
