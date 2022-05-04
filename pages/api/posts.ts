// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export interface Post {
  path: string;
  publishedDate: string;
  title: string;
  author: string;
  description: string;
}

const posts: Post[] = [
  {
    path: 'first-post',
    publishedDate: '2022-05-04',
    title: 'Making this website',
    author: 'Leo Wheelan',
    description:
      'A short post outlining the motivation and description of this website',
  },
];

export default function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>,
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(posts);
      break;
    default:
      res.setHeader('Allow', ['GET']);
  }
}
