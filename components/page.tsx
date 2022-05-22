import Head from 'next/head';
import Navbar from './navbar';
import { FC, PropsWithChildren } from 'react';
import nightwind from 'nightwind/helper';

const darkBg = 'dark:bg-slate-800';
const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div
      className={`bg-white ${darkBg} overflow-scroll`}
      style={{ height: '100vh' }}
    >
      <div className="max-w-xl px-4 py-4 mx-auto">{children}</div>
    </div>
  );
};

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
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      <Navbar />
      {children}
    </Layout>
  );
};

export default Page;
