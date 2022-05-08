import type { NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { Link } from '../components/link';

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
    <Layout>
      <Head>
        <title>Leo Wheelan</title>
        <meta name="description" content="Leo Wheelan's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className="flex flex-col items-center">
        <MyFace />
        <h1 className="text-4xl font-extrabold tracking-tight my-4">
          Leo Wheelan
        </h1>
      </header>

      <main className="flex flex-col justify-center align-center">
        <section className="text-xl">
          <p className="text-center">
            Hello, welcome to my website. I&apos;m a software engineer currently
            working at <Link href="https://birdie.care" text="Birdie" />.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
