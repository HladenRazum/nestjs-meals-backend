import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1678298273931 implements MigrationInterface {
  name = 'CreateUsers1678298273931';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users " ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "bio" character varying NOT NULL DEFAULT '', "imageUrl" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, CONSTRAINT "PK_4ab1c54e07add7286bfd0c510c4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users "`);
  }
}
