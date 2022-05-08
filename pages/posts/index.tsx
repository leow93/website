import Layout from '../../components/layout';
import Head from 'next/head';
import { post as firstPost } from './first-post';
import Footer from '../../components/footer';
import { BlogPostCard } from '../../components/card';
import React, { useEffect, useState } from 'react';
import { Post } from '../api/posts';
import NextLink from 'next/link';
import { Link } from '../../components/link';

export const posts: Post[] = [firstPost];
const sleep = (ms = 100) => new Promise((r) => setTimeout(r, ms));
const fetchPosts = (): Promise<Post[]> =>
  sleep(500).then(() => fetch('/api/posts').then((x) => x.json()));

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
      <h1 className="text-4xl font-extrabold tracking-tight mt-4 mb-8">Blog</h1>
      {loading && <h4>Loading...</h4>}
      {p.map((post) => (
        <NextLink passHref key={post.path} href={`/posts/${post.path}`}>
          <BlogPostCard
            header={new Date(post.publishedDate).toLocaleDateString()}
            title={post.title}
            description={post.description}
          />
        </NextLink>
      ))}

      <Footer>
        <Link href="/" text="Back to home" />
      </Footer>
    </Layout>
  );
};

export default Posts;
