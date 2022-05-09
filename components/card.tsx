import React, { ForwardedRef, PropsWithChildren } from 'react';

interface Props {
  header: string;
  title: string;
  description: string;
  onClick?: () => void;
  linkRef?: ForwardedRef<any>;
  href?: string;
}

const className =
  'flex flex-col w-full rounded shadow-lg p-4 bg-slate-50 dark:bg-slate-600';

const Card = (props: PropsWithChildren<Props>) => {
  const children = (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl dark:text-slate-50 font-bold">{props.title}</h2>
        <h3 className="text-sm dark:text-slate-100 font-bold">
          {props.header}
        </h3>
      </div>
      <p className="text-gray-700 dark:text-stone-50 mt-4">
        {props.description}
      </p>
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
