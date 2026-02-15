import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './presentation/controllers/app.controller';
import { AppUseCase } from './application/use-cases/app.use-case';
import { CarController } from './presentation/controllers/car.controller';
import { CreateCarUseCase } from './application/use-cases/car/create-car.use-case';
import { GetCarsUseCase } from './application/use-cases/car/get-cars.use-case';
import { GetCarUseCase } from './application/use-cases/car/get-car.use-case';
import { UpdateCarUseCase } from './application/use-cases/car/update-car.use-case';
import { DeleteCarUseCase } from './application/use-cases/car/delete-car.use-case';
import { CarRepository } from './infrastructure/services/car.repository';
import { typeOrmConfig } from './infrastructure/config/typeorm.config';
import { Car } from './domain/entities/car.entity';
import { CarType } from './domain/entities/car-type.entity';
import { CarTypeRepository } from './infrastructure/services/car-type.repository';
import { CreateCarTypeUseCase } from './application/use-cases/car-type/create-car-type.use-case';
import { CarTypeController } from './presentation/controllers/car-type.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    TypeOrmModule.forFeature([Car, CarType]),
  ],
  controllers: [AppController, CarController, CarTypeController],
  providers: [
    AppUseCase,
    CreateCarUseCase,
    GetCarsUseCase,
    GetCarUseCase,
    UpdateCarUseCase,
    DeleteCarUseCase,
    CreateCarTypeUseCase,
    {
      provide: 'ICarRepository',
      useClass: CarRepository,
    },
    {
      provide: 'ICarTypeRepository',
      useClass: CarTypeRepository,
    },
  ],
})
export class AppModule { }
