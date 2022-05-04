import Layout from '../../components/layout';
import Link from 'next/link';
import Head from 'next/head';
import { Post } from './types';
import { post as firstPost } from './first-post';
import Footer from '../../components/footer';
import { BlogPostCard } from '../../components/card';
import React from 'react';

export const posts: Post[] = [firstPost];

const Posts = () => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      {posts.map((post) => (
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
