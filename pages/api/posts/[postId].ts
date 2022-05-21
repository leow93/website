// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAll, getById } from './db';
import { Post } from '../../../common/posts';

interface NotFound {
  status: 404;
  message: 'Not found.';
}
interface BadRequest {
  status: 400;
  message: string;
}

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<Post | NotFound | BadRequest>,
) {
  const { method, query } = req;

  switch (method) {
    case 'GET':
      const { postId } = query;
      if (!postId || typeof postId !== 'string') {
        return res
          .status(400)
          .json({ status: 400, message: '`postId` must be a string.' });
      }

      const post = await getById(postId);
      if (!post) {
        return res.status(404).json({ status: 404, message: 'Not found.' });
      }
      res.status(200).json(post);
      break;
    default:
      res.setHeader('Allow', ['GET']);
  }
}
