import styles from './index.module.css'

export const Shop = ({ bgImage }) => {
  return (
    <section
      id='shop'
      className={styles.shop}
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.wrap}>
        <div className={styles.flame}>
          <span></span>
          <h3 className={styles.title}>Reservation</h3>
          <p className={styles.text}>ケーキを予約する</p>
          <button className={styles.button}>Show more</button>
        </div>
      </div>
    </section>
    )
}