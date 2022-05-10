import Layout from '../../components/layout';
import Head from 'next/head';
import { post as firstPost } from './making-this-website';
import { BlogPostCard } from '../../components/card';
import React, { useEffect, useState } from 'react';
import { Post } from '../api/posts';
import NextLink from 'next/link';
import Navbar from '../../components/navbar';

export const posts: Post[] = [firstPost];
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
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar />
      <h1 className="text-4xl dark:text-slate-50 font-extrabold tracking-tight mt-4 mb-8">
        Blog
      </h1>
      {loading && <h4 className="dark:text-slate-50">Loading...</h4>}
      {p.map((post) => (
        <NextLink passHref key={post.path} href={`/posts/${post.path}`}>
          <BlogPostCard
            header={new Date(post.publishedDate).toLocaleDateString()}
            title={post.title}
            description={post.description}
          />
        </NextLink>
      ))}
    </Layout>
  );
};

export default Posts;
