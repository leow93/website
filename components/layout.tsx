import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren<any>) => {
  return <div className="max-w-xl px-4 mt-3 mb-6 mx-auto">{children}</div>;
};

export default Layout;
