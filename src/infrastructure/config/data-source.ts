import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Car } from '../../domain/entities/car.entity';
import { CarType } from 'src/domain/entities/car-type.entity';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mssql',
    host: process.env.DB_HOST || 'localhost',
    port: +(process.env.DB_PORT || 1433),
    username: process.env.DB_USERNAME || 'SA',
    password: process.env.DB_PASSWORD || 'MyStrongPass123',
    database: process.env.DB_NAME || 'morent_node',
    entities: [Car, CarType],
    migrations: [__dirname + '/../migrations/*.ts'],
    migrationsRun: true,
    migrationsTableName: '__migrations',
    migrationsTransactionMode: 'all',
    synchronize: false,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
});
