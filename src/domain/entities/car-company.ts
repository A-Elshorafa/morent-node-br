import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('CarCompanies')
export class CarCompany {
    @PrimaryGeneratedColumn()
    CarCompanyId: Number;

    @Column()
    CarCompanyName: String;
}