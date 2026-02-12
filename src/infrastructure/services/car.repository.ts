import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../../domain/entities/car.entity';
import { ICarRepository } from '../../domain/repositories/car.repository.interface';

@Injectable()
export class CarRepository implements ICarRepository {
    constructor(
        @InjectRepository(Car)
        private readonly repository: Repository<Car>,
    ) { }

    async create(car: Car): Promise<Car> {
        return this.repository.save(car);
    }

    async findAll(): Promise<Car[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<Car | null> {
        return this.repository.findOne({ where: { CarId: id } });
    }

    async update(id: number, car: Partial<Car>): Promise<Car> {
        await this.repository.update(id, car);
        // Fetch the updated entity
        return this.repository.findOne({ where: { CarId: id } }) as Promise<Car>;
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
