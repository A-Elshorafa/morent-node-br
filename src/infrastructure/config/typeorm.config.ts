import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typeOrmConfig = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
    type: 'mssql',
    host: configService.get<string>('DB_HOST') || 'localhost',
    port: +(configService.get<number>('DB_PORT') || 1433),
    username: configService.get<string>('DB_USERNAME') || 'SA',
    password: configService.get<string>('DB_PASSWORD') || 'MyStrongPass123',
    database: configService.get<string>('DB_NAME') || 'morent_node',
    entities: [__dirname + '/../../domain/entities/*.entity{.ts,.js}'],
    synchronize: true, // Set to false in production
    options: {
        encrypt: false, // Ensure this matches your SQL Server configuration
        trustServerCertificate: true,
    },
});
