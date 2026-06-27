import styles from './index.module.css'
import Image from "next/image";

export const Recruit = () => {
  return (
    <section id='recruit' className={styles.recruit}>
      <div className={styles.wrap}>
        <div className={styles['recruit-info']}>
          <Image
            className={styles['pastry-chef']}
            src="/recruit_photo/pastry-chef.png"
            alt="パティシエ"
            width={385}
            height={256.95}
          />
          <p className={styles['recruit-title']}>採用情報</p>
        </div>
        <div className={styles['store-info']}>
          <Image
            className={styles['store-img']}
            src="/recruit_photo/store.png"
            alt="お店"
            width={385}
            height={256.95}
          />
          <p className={styles['recruit-title']}>店舗検索</p>
        </div>
      </div>
    </section>
    )
}