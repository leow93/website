import type { NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import { Link } from '../components/link';
import Page from '../components/page';

const MyFace = () => (
  <Image
    src="/images/leo.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={158} // Desired size with correct aspect ratio
    alt="Leo"
    style={{
      borderRadius: '50%',
    }}
  />
);

const Home: NextPage = () => {
  return (
    <Page>
      <header className="flex flex-col items-center">
        <MyFace />
        <h1 className="text-4xl dark:text-slate-50 font-extrabold tracking-tight my-4">
          Leo Wheelan
        </h1>
      </header>

      <main className="flex flex-col justify-center align-center">
        <section>
          <p className="text-center text-xl dark:text-slate-50">
            Hello, welcome to my website. I&apos;m a software engineer living in
            London and working at{' '}
            <Link href="https://birdie.care" text="Birdie" /> - we&apos;re
            trying to make vast improvements in social care. Check out{' '}
            <Link
              href="https://apply.workable.com/birdie/"
              text="our job board"
            />{' '}
            if that sounds like something you&apos;d like to do! Alternatively,
            feel free to{' '}
            <Link
              href="mailto:leowheelan93@gmail.com"
              text="reach out to me via email."
            />
          </p>
        </section>
      </main>
    </Page>
  );
};

export default Home;
