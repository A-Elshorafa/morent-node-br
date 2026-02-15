import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCarReviewsMigration1771157304783 implements MigrationInterface {
    name = 'AddCarReviewsMigration1771157304783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("UserId" int NOT NULL IDENTITY(1,1), "FullName" nvarchar(255) NOT NULL, "Email" nvarchar(255) NOT NULL, "PhoneNumber" nvarchar(255) NOT NULL, "NationalID" nvarchar(255) NOT NULL, "DateOfBirth" datetime NOT NULL, "Address" nvarchar(255) NOT NULL, "DrivingLicenseNumber" nvarchar(255) NOT NULL, "JobRole" int NOT NULL, "PhotoUrl" nvarchar(255) NOT NULL, "PasswordHash" nvarchar(255) NOT NULL, CONSTRAINT "PK_7dfc06cf97c14780812e7ccffb3" PRIMARY KEY ("UserId"))`);
        await queryRunner.query(`CREATE TABLE "car-reviews" ("CarReviewId" int NOT NULL IDENTITY(1,1), "Rating" int NOT NULL, "ReviewText" nvarchar(255) NOT NULL, "CreatedAt" datetime NOT NULL, "UpdatedAt" datetime NOT NULL, "carCarId" int, "userUserId" int, CONSTRAINT "PK_1cbc8bc2abc86be3ea1ae9c0101" PRIMARY KEY ("CarReviewId"))`);
        await queryRunner.query(`ALTER TABLE "car-reviews" ADD CONSTRAINT "FK_edbe3a3c4b16ed7c8cfdf08b5a8" FOREIGN KEY ("carCarId") REFERENCES "Cars"("CarId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "car-reviews" ADD CONSTRAINT "FK_fb9da1559dcbd246fe3defa6d97" FOREIGN KEY ("userUserId") REFERENCES "users"("UserId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car-reviews" DROP CONSTRAINT "FK_fb9da1559dcbd246fe3defa6d97"`);
        await queryRunner.query(`ALTER TABLE "car-reviews" DROP CONSTRAINT "FK_edbe3a3c4b16ed7c8cfdf08b5a8"`);
        await queryRunner.query(`DROP TABLE "car-reviews"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
