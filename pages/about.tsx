import Layout from '../components/layout';
import Head from 'next/head';
import Footer from '../components/footer';
import { Link } from '../components/link';

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>
    <h1 className="text-4xl font-extrabold tracking-tight my-4">About</h1>
    <h2 className="text-2xl font-bold">Under construction 🔨</h2>

    <Footer>
      <Link href="/" text="Back to home" />
    </Footer>
  </Layout>
);

export default About;
