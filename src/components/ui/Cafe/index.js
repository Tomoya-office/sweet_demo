import styles from "./index.module.css";
import Image from "next/image";

export const Cafe = () => {
  return (
    <section id="cafe" className={styles.cafe}>
      <div className={styles.wrap}>
        <div className={styles.contents}>
          <h3 className={styles.title}>
            紅茶とスイーツ
            <br />
            そして静けさに包まれる贅沢な午後を
          </h3>
          <p className={styles.message}>
            紅茶の香りに包まれながら、心ほどける午後のひとときを。 <br />
            アフタヌーンティーは、季節のスイーツや軽食を少しずつ楽しめる贅沢なご褒美時間。
            <br />
            色とりどりのケーキや焼き菓子を、お気に入りの紅茶とともに優雅な空間でゆったりと味わえます。
            <br />
            お友達とのおしゃべりや、大切な人との記念日にもぴったり。
            <br />
            忙しい日常を忘れて、ちょっと特別な午後を過ごしてみませんか？
          </p>
        </div>
        <Image
          className={styles.cream}
          src="/cafe_photo/cream.png"
          alt="クリーム"
          width={837}
          height={267}
        />
        <div className={styles["teapot-wrap"]}>
          <Image
            className={styles.teapot}
            src="/cafe_photo/teapot.png"
            alt="ティーポット"
            width={420}
            height={500}
          />
        </div>
        <Image
          className={styles["strawberry-tart"]}
          src="/cafe_photo/strawberry-tart.png"
          alt="いちごタルト"
          width={533}
          height={400}
        />
        <Image
          className={styles["strawberry-parfait"]}
          src="/cafe_photo/strawberry-parfait.png"
          alt="いちごパフェ"
          width={185}
          height={312}
        />
        <Image
          className={styles.pastries}
          src="/cafe_photo/pastries.png"
          alt="ペストリー"
          width={310}
          height={488}
        />
      </div>
    </section>
  );
};
