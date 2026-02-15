import { Car } from "./car.entity";
import { User } from "./user.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity('car-reviews')
export class CarReview {
    @PrimaryGeneratedColumn()
    public CarReviewId: Number;

    @ManyToOne(() => Car, (car) => car.Reviews)
    public Car: Car;

    @ManyToOne(() => User, (usr) => usr.CarReviews)
    public User: User;

    @Column()
    public Rating: Number;

    @Column()
    public ReviewText: String;

    @Column()
    public CreatedAt: Date;

    @Column()
    public UpdatedAt: Date;
}