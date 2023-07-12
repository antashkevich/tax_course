import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <h3 className={styles.blockTitle}>Categories</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.link} href=''>Flowers</a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href=''>Gifts </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href=''>Roses </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href=''> Occasion</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.blockTitle}>Information</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.link} href=''>Shop</a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href=''>About us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
