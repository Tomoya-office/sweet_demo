import styles from "./index.module.css";
import Image from "next/image";

export const Menu = () => {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.wrap}>
        <Image
          className={styles["title"]}
          src="/menu_photo/Menu.svg"
          alt="Menu"
          width={385}
          height={473}
        />
        <div className={`${styles["info-wrap"]} ${styles["shortcake"]}`}>
          <Image
            className={styles.shortcake_img}
            src="/menu_photo/shortcake.png"
            alt="ショートケーキ"
            width={635}
            height={490}
            style={{ width: "100%", height: "auto" }}
          />
          <div className={`${styles["cake-info"]} ${styles["shortcake-info"]}`}>
            <p className={styles["cake-title"]}>
              ふんわり贅沢なショートケーキ！
            </p>
            <p className={styles["cake-content"]}>
              ふわふわのスポンジに、甘さ控えめの生クリームと新鮮ないちごを
              <br />
              サンドした王道のショートケーキ。
              <br />
              やさしい甘さといちごの酸味が口いっぱいに広がります。
              <br />
              ティータイムやお祝い、自分へのご褒美にぴったりの一品です。
            </p>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className={styles.header}>値段</th>
                  <td className={styles.data}>520円</td>
                </tr>
                <tr>
                  <th className={styles.header}>カロリー</th>
                  <td className={styles.data}>約372kcal</td>
                </tr>
                <tr>
                  <th className={styles.header}>アレルギー</th>
                  <td className={styles.data}>
                    卵・乳成分・小麦・ゼラチン・いちご
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${styles["info-wrap"]} ${styles["cheesecake"]}`}>
          <Image
            className={styles.cheesecake_img}
            src="/menu_photo/cheesecake.png"
            alt="チーズケーキ"
            width={685}
            height={314}
            style={{ width: "100%", height: "auto" }}
          />
          <div
            className={`${styles["cake-info"]} ${styles["cheesecake-info"]}`}
          >
            <p className={styles["cake-title"]}>
              クリーミーな極上チーズケーキ！
            </p>
            <p className={styles["cake-content"]}>
              濃厚でなめらかな口どけが魅力の特製チーズケーキ。
              <br />
              厳選したクリームチーズのコクと、ほどよい酸味が絶妙にマッチ。
              <br />
              タルトのサクサク感とともに、贅沢な味わいをお楽しみいただけます。
              <br />
              ひとくちごとに広がる深いコクが、心まで満たしてくれる一品です。
            </p>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className={styles.header}>値段</th>
                  <td className={styles.data}>480円</td>
                </tr>
                <tr>
                  <th className={styles.header}>カロリー</th>
                  <td className={styles.data}>約362kcal</td>
                </tr>
                <tr>
                  <th className={styles.header}>アレルギー</th>
                  <td className={styles.data}>卵・乳成分・小麦</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={`${styles["info-wrap"]} ${styles["chocolatecake"]}`}>
          <Image
            className={styles.chocolatecake_img}
            src="/menu_photo/chocolatecake.png"
            alt="チョコレートケーキ"
            width={695}
            height={484}
            style={{ width: "100%", height: "auto" }}
          />
          <div
            className={`${styles["cake-info"]} ${styles["chocolatecake-info"]}`}
          >
            <p className={styles["cake-title"]}>
              濃厚×爽やか 至福のチョコケーキ！
            </p>
            <p className={styles["cake-content"]}>
              いちごの甘酸っぱさと、とろける濃厚チョコが奏でる贅沢なハーモニー。
              <br />
              ふんわりチョコスポンジに、自家製ガナッシュとフレッシュいちごを
              たっぷりトッピング。
              <br /> 華やかな見た目で、パーティーやご褒美にもぴったり。
              <br />
              今だけの特別な味わいを、心まで甘く染まるひとときとともに。
            </p>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className={styles.header}>値段</th>
                  <td className={styles.data}>520円</td>
                </tr>
                <tr>
                  <th className={styles.header}>カロリー</th>
                  <td className={styles.data}>約372kcal</td>
                </tr>
                <tr>
                  <th className={styles.header}>アレルギー</th>
                  <td className={styles.data}>
                    卵・乳成分・小麦・ゼラチン・いちご
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={`${styles["info-wrap"]} ${styles["canele"]}`}>
          <Image
            className={styles.canele_img}
            src="/menu_photo/canele.png"
            alt="カヌレ"
            width={670}
            height={427}
            style={{ width: "100%", height: "auto" }}
          />
          <div className={`${styles["cake-info"]} ${styles["canele-info"]}`}>
            <p className={styles["cake-title"]}>濃厚バニラ香る、カヌレ</p>
            <p className={styles["cake-content"]}>
              外はカリッと香ばしく、中はもっちりしっとり。
              <br />{" "}
              ラム酒とバニラがふわりと香る、奥深い味わいのフランス伝統菓子。
              <br />{" "}
              ひとくちで広がる甘さと香りが、日常にささやかな贅沢を添えます。
              <br />
              コーヒーや紅茶と一緒に、心とろけるひとときをどうぞ。
            </p>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className={styles.header}>値段</th>
                  <td className={styles.data}>320円</td>
                </tr>
                <tr>
                  <th className={styles.header}>カロリー</th>
                  <td className={styles.data}>約172kcal</td>
                </tr>
                <tr>
                  <th className={styles.header}>アレルギー</th>
                  <td className={styles.data}>卵・乳成分・小麦・ラム酒使用</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
