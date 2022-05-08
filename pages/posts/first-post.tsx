import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import { Post } from '../api/posts';
import { Link } from '../../components/link';
import Navbar from '../../components/navbar';

export const post: Post = {
  path: 'first-post',
  publishedDate: '2022-05-04',
  title: 'Making this website',
  author: 'Leo Wheelan',
  description:
    'A short post outlining the motivation and description of this website',
};

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Navbar />
      <h1 className="text-4xl font-extrabold tracking-tight my-4">
        {post.title}
      </h1>
      <div className="flex items-center justify-between">
        <h4 className="text-gray-500 font-mono">
          Published on {new Date(post.publishedDate).toLocaleDateString()}
        </h4>
      </div>

      <h2 className="text-2xl font-bold mt-4 mb-2">Motivation</h2>
      <p>
        Despite being a software engineer for around 6 years, I&apos;d never
        actually deployed a website from scratch before. I saw this as a
        learning opportunity! I also sometimes enjoy writing articles and hope
        this site can serve as a repository for these thoughts.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">Technical details</h2>

      <p>
        The site is hosted by{' '}
        <Link href="https://www.netlify.com/" text="Netlify" />
      </p>

      <p>
        I acquired the domain through{' '}
        <Link href="https://www.namecheap.com/" text="Namecheap" />
      </p>

      <p>
        And I built the content using{' '}
        <Link href="https://nextjs.org/" text="NextJS" />
      </p>
    </Layout>
  );
};

export default FirstPost;
