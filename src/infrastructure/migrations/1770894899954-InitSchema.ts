import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1770894899954 implements MigrationInterface {
    name = 'InitSchema1770894899954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "CarTypes" ("CarTypeId" int NOT NULL IDENTITY(1,1), "TypeName" nvarchar(255) NOT NULL, CONSTRAINT "PK_1e4ddeb13bcd4d5e7b53e244710" PRIMARY KEY ("CarTypeId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "CarTypes"`);
    }

}
