import styles from './navbar.module.css';
import Link from 'next/link';

const Item = ({ name, href }: { name: string; href: string }) => (
  <Link href={href}>
    <div className={styles.item}>
      <a>{name}</a>
    </div>
  </Link>
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
