import { PropsWithChildren } from 'react';
import styles from './footer.module.css';

const Footer = ({ children }: PropsWithChildren<any>) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Footer;
