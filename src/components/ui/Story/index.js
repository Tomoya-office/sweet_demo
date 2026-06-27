import styles from "./index.module.css";
import Image from "next/image";

export const Story = () => {
  return (
    <section id="story" className={styles.story}>
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          とっておきの甘い時間を
          <br />
          大切な人と。
        </h3>
        <p className={styles.text}>
          ふんわり香る焼きたてのスポンジ、 口どけなめらかな生クリーム、
          <br />
          こだわりの素材を使ったケーキが、特別なひとときを彩ります。
          <br />
          落ち着いた空間で、香り高い紅茶とともに、贅沢なティータイム
          <br />
          をお友達とご家族と大切な人と一緒に。
          <br />
          あなたの街で幸せな時間をお過ごしください。
        </p>
        <div className={styles["story-photos"]}>
          <Image
            className={styles["strawberry-top"]}
            src="/message_photo/strawberry1.png"
            alt="イチゴ"
            width={154}
            height={159}
          />
          <Image
            className={styles["strawberry-middle"]}
            src="/message_photo/strawberry2.png"
            alt="イチゴ"
            width={150}
            height={100}
          />
          <Image
            className={styles["strawberry-bottom"]}
            src="/message_photo/strawberry3.png"
            alt="イチゴ"
            width={142}
            height={128}
          />
        </div>
        <Image
          className={styles["shortcake"]}
          src="/message_photo/shortcake.png"
          alt="ショートケーキ"
          width={245}
          height={247}
        />
      </div>
    </section>
  );
};
