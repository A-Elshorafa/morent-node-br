import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCarTypeDto } from './create-car-type.dto';

export class CarTypeItemDto extends PartialType(CreateCarTypeDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    CarTypeId: Number;
}
