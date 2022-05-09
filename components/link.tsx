import NextLink from 'next/link';
interface Props {
  href: string;
  text: string;
}
export const Link = ({ href, text }: Props) => (
  <NextLink href={href}>
    <a className="text-blue-600 dark:text-slate-50 font-bold box-border max-w-xs hover:text-blue-700 underline hover:no-underline">
      {text}
    </a>
  </NextLink>
);
