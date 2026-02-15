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
import { Location } from './domain/entities/location.entity';
import { CarTypeRepository } from './infrastructure/services/car-type.repository';
import { LocationRepository } from './infrastructure/services/location.repository';
import { CreateCarTypeUseCase } from './application/use-cases/car-type/create-car-type.use-case';
import { CarTypeController } from './presentation/controllers/car-type.controller';
import { GetCarTypesUseCase } from './application/use-cases/car-type/get-car-types.use-case';
import { UpdateCarTypeUseCase } from './application/use-cases/car-type/update-car-type.use-case';
import { DeleteCarTypeUseCase } from './application/use-cases/car-type/delete-car-type.use-case';
import { GetCarTypeUseCase } from './application/use-cases/car-type/get-car-type.use-case';
import { LocationController } from './presentation/controllers/location.controller';
import { CreateLocationUseCase } from './application/use-cases/location/create-location.use-case';
import { GetLocationsUseCase } from './application/use-cases/location/get-locations.use-case';
import { UpdateLocationUseCase } from './application/use-cases/location/update-location.use-case';
import { DeleteLocationUseCase } from './application/use-cases/location/delete-location.use-case';
import { GetLocationUseCase } from './application/use-cases/location/get-location.use-case';

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
    TypeOrmModule.forFeature([Car, CarType, Location]),
  ],
  controllers: [AppController, CarController, CarTypeController, LocationController],
  providers: [
    AppUseCase,
    CreateCarUseCase,
    GetCarsUseCase,
    GetCarUseCase,
    UpdateCarUseCase,
    DeleteCarUseCase,
    CreateCarTypeUseCase,
    GetCarTypesUseCase,
    UpdateCarTypeUseCase,
    DeleteCarTypeUseCase,
    GetCarTypeUseCase,
    CreateLocationUseCase,
    GetLocationsUseCase,
    UpdateLocationUseCase,
    DeleteLocationUseCase,
    GetLocationUseCase,
    {
      provide: 'ICarRepository',
      useClass: CarRepository,
    },
    {
      provide: 'ICarTypeRepository',
      useClass: CarTypeRepository,
    },
    {
      provide: 'ILocationRepository',
      useClass: LocationRepository,
    },
  ],
})
export class AppModule { }
