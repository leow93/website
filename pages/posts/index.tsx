import Layout from '../../components/layout';
import Link from 'next/link';
import Head from 'next/head';
import { post as firstPost } from './first-post';
import Footer from '../../components/footer';
import { BlogPostCard } from '../../components/card';
import React, { useEffect, useState } from 'react';
import { Post } from '../api/posts';

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
      <h1>Blog</h1>
      {loading && <h4>Loading...</h4>}
      {p.map((post) => (
        <Link passHref key={post.path} href={`/posts/${post.path}`}>
          <BlogPostCard
            header={new Date(post.publishedDate).toLocaleDateString()}
            title={post.title}
            description={post.description}
          />
        </Link>
      ))}

      <Footer>
        <h3>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h3>
      </Footer>
    </Layout>
  );
};

export default Posts;
