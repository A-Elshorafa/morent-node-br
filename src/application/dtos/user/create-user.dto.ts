import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsNumber } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public FullName: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public Email: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public PhoneNumber: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public NationalID: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    public DateOfBirth: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public Address: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public DrivingLicenseNumber: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public JobRole: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public PhotoUrl: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public Password: String;

    public PasswordHash: String;
}