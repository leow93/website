import React, { ForwardedRef, PropsWithChildren } from 'react';

interface Props {
  header: string;
  title: string;
  description: string;
  onClick?: () => void;
  linkRef?: ForwardedRef<any>;
  href?: string;
}

const className = 'flex flex-col w-full border rounded border-gray-300 p-4';

const Card = (props: PropsWithChildren<Props>) => {
  const children = (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <h3 className="text-sm text-gray-600 font-bold">{props.header}</h3>
      </div>
      <p className="text-gray-700 mt-4">{props.description}</p>
    </>
  );
  return props.href ? (
    <a
      className={className}
      onClick={props.onClick}
      href={props.href}
      ref={props.linkRef}
    >
      {children}
    </a>
  ) : (
    <div className={className} onClick={props.onClick} ref={props.linkRef}>
      {children}
    </div>
  );
};

export const BlogPostCard = React.forwardRef<undefined, Props>((props, ref) => (
  <Card {...(props as any)} linkRef={ref} />
));

export default Card;
