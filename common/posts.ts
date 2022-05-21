export interface Post {
  path: string;
  publishedDate: string;
  title: string;
  author: string;
  description: string;
  draft?: boolean;
}
