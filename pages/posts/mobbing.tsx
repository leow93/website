import type { NextPage } from 'next';
import { Link } from '../../components/link';
import Page from '../../components/page';
import { useEffect, useState } from 'react';
import { Post } from '../../common/posts';

const fetchPost = (): Promise<Post> =>
  fetch('/api/posts/mobbing').then((x) => x.json());

const usePosts = () => {
  const [post, setPost] = useState<Post | undefined>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchPost()
      .then((x) => setPost(x))
      .finally(() => setLoading(false));
  }, []);

  return [post, loading] as const;
};

const FirstPost: NextPage<Post> = () => {
  const [post, loading] = usePosts();

  if (loading || !post) {
    return (
      <Page title="Loading">
        <h1 className="text-2xl dark:text-slate-50 font-extrabold tracking-tigh my-4">
          Loading...
        </h1>
      </Page>
    );
  }

  return (
    <Page title="Mob programming">
      <h1 className="text-4xl dark:text-slate-50 font-extrabold tracking-tight my-4">
        Mob programming
      </h1>
      <div className="flex items-center justify-between">
        <h4 className="text-gray-500 dark:text-slate-100 font-mono">
          Published on {new Date(post.publishedDate).toLocaleDateString()}
        </h4>
      </div>
    </Page>
  );
};

export default FirstPost;
