import styles from './index.module.css'

export const Footer = () => {
  return (
  <footer className={styles.footer}>
      <nav className={styles.nav}>
        <a href="#story" className={styles.link}>Story</a>
        <a href="#news" className={styles.link}>News</a>
        <a href="#shop" className={styles.link}>Shop</a>
        <a href="#menu" className={styles.link}>Menu</a>
        <a href="#cafe" className={styles.link}>Cafe</a>
        <a href="#recruit" className={styles.link}>Recruit</a>
      </nav>
    </footer>
    )
}
