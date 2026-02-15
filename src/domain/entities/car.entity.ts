import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CarReview } from './car-reviews.entity';

@Entity('Cars')
export class Car {
    @PrimaryGeneratedColumn()
    CarId: number;

    @Column()
    ModelName: string;

    @Column('decimal', { precision: 18, scale: 2 })
    RentalPrice: number;

    @Column()
    LicensePlate: string;

    @Column()
    Description: string;

    @Column('int')
    Year: number;

    @Column()
    Color: string;

    @Column('int')
    NoOfPassengers: number;

    @Column('int')
    FuelCapacity: number;

    @Column('bit')
    IsAutomatic: boolean;

    @Column('bit')
    IsAvailable: boolean;

    @Column('bit')
    IsPopular: boolean;

    @Column()
    PhotoUrl: string;

    // Relations (Using IDs for now as per plan)
    @Column('int')
    CarTypeId: number;

    @Column('int')
    OwnerId: number;

    @Column('int')
    CompanyId: number;

    @Column('int')
    LocationId: number;

    @OneToMany(() => CarReview, (review) => review.Car)
    Reviews: CarReview[];
}
