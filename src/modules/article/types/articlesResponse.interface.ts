import { ArticleEntity } from '../article.entity';

export interface ArticlesResponseInterface {
  articles: ArticleEntity[];
  count: number;
}
