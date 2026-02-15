import { PartialType } from "@nestjs/swagger";
import { CreateCarCompanyDto } from "./create-car-company.dto";

export class UpdateCarCompanyDto extends PartialType(CreateCarCompanyDto) { }