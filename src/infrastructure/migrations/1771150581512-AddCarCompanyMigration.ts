import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCarCompanyMigration1771150581512 implements MigrationInterface {
    name = 'AddCarCompanyMigration1771150581512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "CarCompanies" ("CarCompanyId" int NOT NULL IDENTITY(1,1), "CarCompanyName" nvarchar(255) NOT NULL, CONSTRAINT "PK_e4836e9c5791678205872efe265" PRIMARY KEY ("CarCompanyId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "CarCompanies"`);
    }

}
