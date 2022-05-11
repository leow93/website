import NextLink from 'next/link';
interface Props {
  href: string;
  text: string;
}
export const Link = ({ href, text }: Props) => (
  <NextLink href={href}>
    <a className="text-blue-500 dark:text-neutral-50 dark:hover:text-neutral-100 font-bold box-border max-w-xs hover:text-blue-600 underline hover:no-underline">
      {text}
    </a>
  </NextLink>
);
