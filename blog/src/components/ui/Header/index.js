import Image from "next/image";
import styles from './index.module.css'
import Link from "next/link";

export const Header = () => {
  return (
  <header className={styles['header-position']}>
    <div className="photo-position">
      <Image
        className={styles['top-photo']}
        src="/top_photo/top_photo.png"
        alt="トップ画像"
        width={1440}
        height={400}
        priority
      />
    </div>
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
  </header>
  )
}
