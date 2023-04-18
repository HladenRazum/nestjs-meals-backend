import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsBetweenFavoriteArticlesAndUser1681811975496 implements MigrationInterface {
    name = 'AddRelationsBetweenFavoriteArticlesAndUser1681811975496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users _favorites_articles" ("users_id" integer NOT NULL, "articlesId" integer NOT NULL, CONSTRAINT "PK_127b5d8bf9df54aaf80a33dfd63" PRIMARY KEY ("users_id", "articlesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_67712aa5f225f196c71e571728" ON "users _favorites_articles" ("users_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6131c0fb463c5ad7cdca5652ec" ON "users _favorites_articles" ("articlesId") `);
        await queryRunner.query(`ALTER TABLE "users _favorites_articles" ADD CONSTRAINT "FK_67712aa5f225f196c71e5717283" FOREIGN KEY ("users_id") REFERENCES "users "("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users _favorites_articles" ADD CONSTRAINT "FK_6131c0fb463c5ad7cdca5652ec9" FOREIGN KEY ("articlesId") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users _favorites_articles" DROP CONSTRAINT "FK_6131c0fb463c5ad7cdca5652ec9"`);
        await queryRunner.query(`ALTER TABLE "users _favorites_articles" DROP CONSTRAINT "FK_67712aa5f225f196c71e5717283"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6131c0fb463c5ad7cdca5652ec"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_67712aa5f225f196c71e571728"`);
        await queryRunner.query(`DROP TABLE "users _favorites_articles"`);
    }

}
