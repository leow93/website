import { useEffect, useState } from 'react';
import { Github } from './github';
import { Link } from './link';
import { ThemeToggle } from './theme-toggle';

interface Props {
  name: string;
  href: string;
  exact?: boolean;
}

const baseItemClassName = 'p-1 mx-1 rounded';

const isActive = (href: string, exact?: boolean): boolean => {
  if (typeof window === 'undefined') return false;
  switch (exact) {
    case true:
      return href === window.location.pathname;
    case false:
    case undefined:
      return window.location.pathname.startsWith(href);
  }
};

const getClassName = (href: string, exact?: boolean) =>
  isActive(href, exact) ? baseItemClassName + ' italic' : baseItemClassName;

const Item = ({ name, href, exact }: Props) => {
  const [className, setClassName] = useState(baseItemClassName);
  useEffect(() => setClassName(getClassName(href, exact)), [href, exact]);

  return (
    <div className={className}>
      <Link href={href} text={name} />
    </div>
  );
};

// const LinkedIn = () => (
//   <a className="ml-4" href="https://www.linkedin.com/in/leo-wheelan93/">
//     <Image
//       className="cursor-pointer"
//       src="/images/linkedin.svg" // Route of the image file
//       height={16} // Desired size with correct aspect ratio
//       width={16} // Desired size with correct aspect ratio
//       alt="GitHub"
//     />
//   </a>
// );

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-grow">
        <Github />
        {/* <LinkedIn /> */}
      </div>
      <div className="flex items-center justify-end flex-grow-0">
        <Item href="/" name="Home" exact />
        <Item href="/about" name="About" exact />
        <Item href="/posts" name="Blog" />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
