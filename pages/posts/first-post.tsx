import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import Footer from '../../components/footer';
import utilStyles from '../../styles/utils.module.css';
import { Post } from '../api/posts';
import { Link } from '../../components/link';

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
      <h1>{post.title}</h1>
      <div className={utilStyles.row}>
        <h4 className={utilStyles.lightText}>
          Published on {new Date(post.publishedDate).toLocaleDateString()}
        </h4>
        <h4 className={utilStyles.lightText}>by {post.author}</h4>
      </div>

      <h2>Motivation</h2>
      <p>
        Despite being a software engineer for around 6 years, I&apos;d never
        actually deployed a website from scratch before. I saw this as a
        learning opportunity! I also sometimes enjoy writing articles and hope
        this site can serve as a repository for these thoughts.
      </p>

      <h2>Technical details</h2>

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

      <Footer>
        <h3>
          <Link href="/" text="Back to home" />
        </h3>
      </Footer>
    </Layout>
  );
};

export default FirstPost;
