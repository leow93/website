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
        <section className="text-xl dark:text-slate-50">
          <p className="text-center dark:text-slate-50">
            Hello, welcome to my website. I&apos;m a software engineer currently
            working at <Link href="https://birdie.care" text="Birdie" />.
          </p>
        </section>
      </main>
    </Page>
  );
};

export default Home;
