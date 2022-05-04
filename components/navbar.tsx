import styles from './navbar.module.css';
import Link from 'next/link';

interface Props {
  name: string;
  href: string;
}

const Item = ({ name, href }: Props) => (
  <div className={styles.item}>
    <Link href={href}>
      <a href={href}>{name}</a>
    </Link>
  </div>
);

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Item href="/about" name="About" />
      <Item href="/posts" name="Blog" />
    </div>
  );
};

export default Navbar;
