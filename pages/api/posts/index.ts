// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAll } from './db';
import { Post } from '../../../common/posts';

export default async function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>,
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(await getAll());
      break;
    default:
      res.setHeader('Allow', ['GET']);
  }
}
