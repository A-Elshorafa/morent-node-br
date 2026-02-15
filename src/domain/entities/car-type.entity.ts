import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CarTypes')
export class CarType {
  @PrimaryGeneratedColumn()
  CarTypeId: number;

  @Column()
  TypeName: String;
}