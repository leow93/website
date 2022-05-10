import Head from 'next/head';
import Layout from './layout';
import Navbar from './navbar';
import { FC, PropsWithChildren } from 'react';

interface Props {
  title?: string;
}

const Page: FC<PropsWithChildren<Props>> = ({
  children,
  title = 'Leo Wheelan',
}) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Leo Wheelan's website" />
        <meta name="author" content="Leo Wheelan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </Layout>
  );
};

export default Page;
