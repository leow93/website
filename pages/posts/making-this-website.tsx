import type { NextPage } from 'next';
import { Link } from '../../components/link';
import Page from '../../components/page';
import { useEffect, useState } from 'react';
import { Post } from '../../common/posts';

const fetchPost = (): Promise<Post> =>
  fetch('/api/posts/making-this-website').then((x) => x.json());

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
    <Page title="Making this website">
      <h1 className="text-4xl dark:text-slate-50 font-extrabold tracking-tight my-4">
        Making this website
      </h1>
      <div className="flex items-center justify-between">
        <h4 className="text-gray-500 dark:text-slate-100 font-mono">
          Published on {new Date(post.publishedDate).toLocaleDateString()}
        </h4>
      </div>

      <h2 className="text-2xl dark:text-slate-50 font-bold mt-4 mb-2">
        Motivation
      </h2>
      <p className="dark:text-slate-50">
        Despite being a software engineer for around 6 years, I&apos;d never
        actually deployed a website from scratch before. I saw this as a
        learning opportunity! I also sometimes enjoy writing articles and hope
        this site can serve as a repository for these thoughts.
      </p>

      <hr className="my-4 dark:border-slate-400" />

      <p className="my-1 dark:text-slate-50">
        I acquired the domain through{' '}
        <Link href="https://www.namecheap.com/" text="Namecheap" />.
      </p>

      <p className="my-2 dark:text-slate-50">
        Then I used <Link href="https://www.netlify.com/" text="Netlify" /> to
        cover my hosting needs.
      </p>

      <p className="my-2 dark:text-slate-50">
        The content itself is built using{' '}
        <Link href="https://nextjs.org/" text="NextJS" /> and{' '}
        <Link href="https://v2.tailwindcss.com" text="Tailwind" />.
      </p>
    </Page>
  );
};

export default FirstPost;
