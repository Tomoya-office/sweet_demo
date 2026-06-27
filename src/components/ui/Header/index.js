import Image from "next/image";
import { Niconne } from "next/font/google";
import styles from "./index.module.css";

const niconne = Niconne({
  weight: "400",
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles["top-photo"]}
        src="/top_photo/top_photo.png"
        alt="トップ画像"
        width={1440}
        height={745}
        priority
      />
      <div className={styles.catchphrase}>
        <Image
          className={styles["catchphrase-bg"]}
          src="/top_photo/catchphrase_bg.png"
          alt="トップ画像"
          width={670}
          height={425}
          priority
        />
        <h3 className={`${styles["catchphrase-eng"]} ${niconne.className}`}>
          Sweet Moments with Loved Ones
        </h3>
        <div className={styles["catchphrase-jp"]}>
          <svg viewBox="0 0 300 180" width="300" height="180">
            <path
              id="curve"
              d="M 0 285 A 142.5 142.5 0 0 1 285 285"
              fill="transparent"
            />
            <text>
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                甘いひとときを大切な人と
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <nav className={styles["style-link"]}>
        <a href="#story" className={styles.link}>
          Story
        </a>
        <a href="#news" className={styles.link}>
          News
        </a>
        <a href="#shop" className={styles.link}>
          Shop
        </a>
        <a href="#menu" className={styles.link}>
          Menu
        </a>
        <a href="#cafe" className={styles.link}>
          Cafe
        </a>
        <a href="#recruit" className={styles.link}>
          Recruit
        </a>
      </nav>
    </header>
  );
};
