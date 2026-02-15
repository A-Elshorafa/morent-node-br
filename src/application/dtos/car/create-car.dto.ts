import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateCarDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ModelName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    RentalPrice: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    LicensePlate: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Year: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Color: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    NoOfPassengers: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    FuelCapacity: number;

    @ApiProperty()
    @IsBoolean()
    IsAutomatic: boolean;

    @ApiProperty()
    @IsBoolean()
    IsAvailable: boolean;

    @ApiProperty()
    @IsBoolean()
    IsPopular: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsUrl()
    PhotoUrl: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    CarTypeId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    OwnerId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    CompanyId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    LocationId: number;
}
