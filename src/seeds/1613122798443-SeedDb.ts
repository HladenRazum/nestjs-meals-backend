import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1613122798443 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES 
         ('jest'),
         ('coffee'),
         ('nestjs'),
         ('react'),
         ('javascript')`,
    );

    // password is 1234
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES 
      ('111', '111@abv.bg', '$2b$10$X1bxfJUyHEoYSWIkTm7xBuP6n24U8Yp71N6RdfsZVgoBEk8TyrBJG'),
      ('222', '222@abv.bg', '$2b$10$X1bxfJUyHEoYSWIkTm7xBuP6n24U8Yp71N6RdfsZVgoBEk8TyrBJG')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES
        ('first-article', 'First Article', 'first article description', 'first article body', 'coffee,dragons,reactjs', 1),
        ('second-article', 'Second Article', 'second article description', 'second article body', 'mathematics,data science,reactjs', 2)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('SHUTTING DOWN') as any;
  }
}
