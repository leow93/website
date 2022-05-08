import NextLink from 'next/link';
interface Props {
  href: string;
  text: string;
}
export const Link = ({ href, text }: Props) => (
  <NextLink href={href}>
    <a className="text-blue-600 font-bold hover:text-blue-700 hover:underline">
      {text}
    </a>
  </NextLink>
);
