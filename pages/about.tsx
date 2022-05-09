import Layout from '../components/layout';
import Head from 'next/head';
import Navbar from '../components/navbar';

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>
    <Navbar />
    <h1 className="text-4xl dark:text-slate-50 font-extrabold tracking-tight my-4">
      About
    </h1>
    <h2 className="text-2xl dark:text-slate-50 font-bold">
      Under construction 🔨
    </h2>
  </Layout>
);

export default About;
