import React, { ForwardedRef, PropsWithChildren } from 'react';
import styles from './card.module.css';

interface Props {
  header: string;
  title: string;
  description: string;
  ref?: ForwardedRef<any>;
  onClick?: () => void;
  href?: string;
}

const Card = (props: PropsWithChildren<Props>) => {
  const children = (
    <>
      <h3>{props.header}</h3>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </>
  );
  return props.href ? (
    <a className={styles.card} onClick={props.onClick} href={props.href}>
      {children}
    </a>
  ) : (
    <div className={styles.card} onClick={props.onClick}>
      {children}
    </div>
  );
};

export const BlogPostCard = React.forwardRef<undefined, Props>((props, ref) => (
  <Card ref={ref} {...(props as any)} />
));

export default Card;
