import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../hooks/useTheme';
import { Github } from './github';
import { Link } from './link';

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
  useEffect(() => setClassName(getClassName(href, exact)), []);

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

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return theme === 'light' ? (
    <svg
      onClick={() => setTheme('dark')}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#2563EB"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  ) : (
    <svg
      onClick={() => setTheme('light')}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
};

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
