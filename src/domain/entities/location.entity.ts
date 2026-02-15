import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Locations')
export class Location {
    @PrimaryGeneratedColumn()
    LocationId: Number;

    @Column()
    LocationName: String;
}