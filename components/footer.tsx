import { PropsWithChildren } from 'react';

const Footer = ({ children }: PropsWithChildren<any>) => {
  return <div className="py-16 h-16">{children}</div>;
};

export default Footer;
