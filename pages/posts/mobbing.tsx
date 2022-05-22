import type { NextPage } from 'next';
import { Link } from '../../components/link';
import Page from '../../components/page';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Post } from '../../common/posts';

const fetchPost = (): Promise<Post> =>
  fetch('/api/posts/mobbing').then((x) => x.json());

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

const darkModeText = 'dark:text-slate-50';

const Text = (props: PropsWithChildren<{}>) => (
  <p className={darkModeText}>{props.children}</p>
);

const SectionTitle = ({ title }: { title: string }) => (
  <div className="mt-8">
    <h2 className="text-2xl dark:text-slate-50 font-bold mt-4 mb-2">{title}</h2>
  </div>
);

const MobbingPost: NextPage<Post> = () => {
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
    <Page title="Mob programming">
      <h1 className="text-4xl dark:text-slate-50 font-extrabold tracking-tight my-4">
        Mob programming
      </h1>
      <div className="flex items-center justify-between">
        <h4 className="text-gray-500 dark:text-slate-100 font-mono">
          Published on {new Date(post.publishedDate).toLocaleDateString()}
        </h4>
      </div>

      <SectionTitle title="Introduction" />
      <Text>
        In this post, what I'd love to share is not necessarily the case for
        mobbing, or even what mobbing <span className="italic">is</span>, but
        the impact I feel it's had on:
      </Text>

      <ul className="list-disc dark:li ml-8 py-4">
        <li className={darkModeText}>
          <span>the work my team produces</span>
        </li>
        <li className={darkModeText}>
          <span>the closeness of our team</span>
        </li>
      </ul>

      <Text>
        To answer <span className="italic">what</span> mob programming is, I'll
        lazily point you to{' '}
        <Link
          href="https://en.wikipedia.org/wiki/Mob_programming"
          text="Wikipedia."
        />
      </Text>
      <Text>
        To answe the question of <span className="italic">why</span>, I would
        recommend{' '}
        <Link
          href="https://tuple.app/pair-programming-guide/the-case-for-pair-programming"
          text="Tuple's article on pairing"
        />{' '}
        as a start.
        <br />
        Following that, there's{' '}
        <Link
          href="https://www.youtube.com/watch?v=YCufE_nf87M"
          text="this great video"
        />{' '}
        which highlights the benefits which you might want to pitch to your
        business, all from a product manager's perspective.
      </Text>

      <SectionTitle title="Beginning again" />
      <Text>
        Back in January 2021, I moved from one team within Birdie to a newly
        forming team to help kick off a new product. At the time, I was one of
        two engineers and we worked alongside a product manager and a designer.
        As we were figuring out how best to organise our ways of working, my
        engineering colleague brought the idea of mobbing to the table,
        mentioning that he had a preference for pairing where possible.
      </Text>

      <br />

      <Text>
        We were all collectively very happy to give it a shot and so we
        committed to mobbing.
      </Text>
    </Page>
  );
};

export default MobbingPost;
