import styles from './layout.module.css';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren<any>) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
