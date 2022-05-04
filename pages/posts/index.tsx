import Layout from '../../components/layout';
import Link from 'next/link';
import Head from 'next/head';
import { Post } from './types';
import { post as firstPost } from './first-post';
import Footer from '../../components/footer';

export const posts: Post[] = [firstPost];

const Posts = () => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.path}>
            <Link href={`/posts/${post.path}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ol>

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
