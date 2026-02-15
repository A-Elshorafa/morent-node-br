import { Inject, Injectable } from "@nestjs/common";
import type { ICarTypeRepository } from "../../../domain/repositories/car-type.repository";
import { CarTypeItemDto } from "src/application/dtos/car-type/create-car-type-item.dto";
import { CreateCarTypeDto } from "src/application/dtos/car-type/create-car-type.dto";

@Injectable()
export class CreateCarTypeUseCase {
    constructor(
        @Inject('ICarTypeRepository')
        private readonly carTypeRepository: ICarTypeRepository,
    ) { }

    async execute(carType: CreateCarTypeDto): Promise<CarTypeItemDto> {
        return this.carTypeRepository.create(carType);
    }
}