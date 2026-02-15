import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarTypeDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    TypeName: String;
}
