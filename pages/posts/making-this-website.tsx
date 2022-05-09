import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import { Post } from '../api/posts';
import { Link } from '../../components/link';
import Navbar from '../../components/navbar';

export const post: Post = {
  path: 'making-this-website',
  publishedDate: '2022-05-04',
  title: 'Making this website',
  author: 'Leo Wheelan',
  description: 'A short post outlining the motivation for this website',
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

      <hr className="my-4" />

      <p className="my-1">
        I acquired the domain through{' '}
        <Link href="https://www.namecheap.com/" text="Namecheap" />.
      </p>

      <p className="my-2">
        Then I used <Link href="https://www.netlify.com/" text="Netlify" /> to
        cover my hosting needs.
      </p>

      <p className="my-2">
        The content itself is built using{' '}
        <Link href="https://nextjs.org/" text="NextJS" /> and{' '}
        <Link href="https://v2.tailwindcss.com" text="Tailwind" />.
      </p>
    </Layout>
  );
};

export default FirstPost;
