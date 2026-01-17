import styles from './index.module.css'
import Link from "next/link";

export const Footer = () => {
  return (
  <footer className={styles.footer}>
      <nav  className={styles['style-link']}>
        <Link
          href='/#story'
          className={styles['nav-link']}
        >
        Story
        </Link>
        <Link
          href='/#news'
          className={styles['nav-link']}
        >
        News
        </Link>
        <Link
          href='/#menu'
          className={styles['nav-link']}
        >
        Menu
        </Link>
        <Link
          href='/#shop'
          className={styles['nav-link']}
        >
        Shop
        </Link>
        <Link
          href='/#cafe'
          className={styles['nav-link']}
        >
        Cafe
        </Link>
      </nav>
    </footer>
    )
}
