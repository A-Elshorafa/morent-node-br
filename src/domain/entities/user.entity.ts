import { Entity, PrimaryGeneratedColumn, Column, IsNull, OneToMany } from "typeorm";
import { CarReview } from "./car-reviews.entity";
import { ManyToOne } from "typeorm/browser";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    public UserId: Number;

    @Column()
    public FullName: String;

    @Column()
    public Email: String;

    @Column()
    public PhoneNumber: String;

    @Column()
    public NationalID: String;

    @Column()
    public DateOfBirth: Date;

    @Column()
    public Address: String;

    @Column()
    public DrivingLicenseNumber: String;

    @Column()
    public JobRole: Number;

    @Column()
    public PhotoUrl: String;

    @Column()
    public PasswordHash: String;

    @OneToMany(() => CarReview, (carReview) => carReview.User)
    public CarReviews: CarReview[];
}