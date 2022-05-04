import Layout from '../components/layout';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/footer';

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>
    <h1>About</h1>
    <h2>Under construction 🔨</h2>

    <Footer>
      <h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
    </Footer>
  </Layout>
);

export default About;
