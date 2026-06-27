import styles from "./index.module.css";
import Image from "next/image";
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({
  weight: "400",
  subsets: ["latin"],
});

export const News = () => {
  return (
    <section id="news" className={styles.news}>
      <div className={styles.wrap}>
        <Image
          className={styles["title"]}
          src="/news_photo/newsweets.svg"
          alt="New Sweets"
          width={385}
          height={473}
        />
        <div className={styles["button-wrap"]}>
          <button className={styles.button}></button>
          <p className={styles["button-guide"]}>all news</p>
        </div>
        <div className={styles["egg-wrap"]}>
          <Image
            className={styles["egg-top"]}
            src="/news_photo/egg1.png"
            alt="たまご"
            width={385}
            height={473}
          />
          <Image
            className={styles["egg-middle"]}
            src="/news_photo/egg2.png"
            alt="たまご"
            width={385}
            height={473}
          />
          <Image
            className={styles["egg-bottom"]}
            src="/news_photo/egg3.png"
            alt="たまご"
            width={385}
            height={473}
          />
        </div>
      </div>
    </section>
  );
};
