import { PropsWithChildren } from 'react';

const darkBg = 'dark:bg-slate-800';

const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className={`bg-white ${darkBg}`} style={{ height: '100vh' }}>
      <div className="max-w-xl px-4 py-4 mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
