import { Link } from './link';

interface Props {
  name: string;
  href: string;
}

const Item = ({ name, href }: Props) => (
  <div className="p-1 mx-1 rounded">
    <Link href={href} text={name} />
  </div>
);

const Navbar = () => {
  return (
    <div className="flex items-center justify-end w-full">
      <Item href="/about" name="About" />
      <Item href="/posts" name="Blog" />
    </div>
  );
};

export default Navbar;
