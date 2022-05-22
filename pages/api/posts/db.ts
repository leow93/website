import { Post } from '../../../common/posts';

export const byDate =
  <T>(fn: (x: T) => Date, direction: 'asc' | 'desc' = 'asc') =>
  (a: T, b: T) => {
    switch (direction) {
      case 'asc':
        return fn(a) > fn(b) ? 1 : -1;
      case 'desc':
        return fn(a) > fn(b) ? -1 : 1;
    }
  };

const posts: Post[] = [
  {
    path: 'making-this-website',
    publishedDate: '2022-05-04',
    title: 'Making this website',
    author: 'Leo Wheelan',
    description:
      'A short post outlining the motivation and description of this website',
  },
  {
    path: 'mobbing',
    publishedDate: '2022-05-21',
    title: 'Mob programming',
    author: 'Leo Wheelan',
    description: 'My experience with mob programming over the last 18 months',
    draft: false,
  },
].sort(byDate((x) => new Date(x.publishedDate), 'desc'));

const map: Record<string, Post> = posts.reduce(
  (record, post) => ({ ...record, [post.path]: post }),
  {},
);

export const getAll = (): Promise<Post[]> =>
  Promise.resolve(posts.filter((x) => x.draft !== true));
export const getById = (id: string): Promise<Post | undefined> =>
  Promise.resolve(map[id]);
