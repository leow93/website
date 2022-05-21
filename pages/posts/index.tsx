import { BlogPostCard } from '../../components/card';
import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import Page from '../../components/page';
import { Post } from '../common/posts';

const fetchPosts = (): Promise<Post[]> =>
  fetch('/api/posts').then((x) => x.json());

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchPosts()
      .then((x) => setPosts(x))
      .finally(() => setLoading(false));
  }, []);

  return [posts, loading] as const;
};

const Posts = () => {
  const [p, loading] = usePosts();

  return (
    <Page title="Blog">
      <h1 className="text-4xl dark:text-slate-50 font-extrabold tracking-tight mt-4 mb-8">
        Blog
      </h1>
      {loading && <h4 className="dark:text-slate-50">Loading...</h4>}
      <div className="space-y-8">
        {p.map((post) => (
          <NextLink passHref key={post.path} href={`/posts/${post.path}`}>
            <BlogPostCard
              header={new Date(post.publishedDate).toLocaleDateString()}
              title={post.title}
              description={post.description}
            />
          </NextLink>
        ))}
      </div>
    </Page>
  );
};

export default Posts;
