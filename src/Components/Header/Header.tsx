import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Icon } from "components/icon";
import { LangsDropdown } from "components/langsDropdown";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerTop}>
        <div className={styles.headerContainer}>
          <Link to={"./"}>
            <Icon name="logo" className={styles.logoIcon} />
          </Link>
          <LangsDropdown />
        </div>
      </div>

      <div className={styles.headerBottom}>
        <div className={styles.headerContainer}>
          <nav>
            <ul className={styles.navList}>
              <li>
                <a className={styles.navLink} href="">
                  Shop
                </a>
              </li>
              <li>
                <a className={styles.navLink} href="">
                  About us
                </a>
              </li>
            </ul>
          </nav>

          <button className={styles.btnCart}>
            <Icon name="cart" className={styles.btnCartIcon} />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
};
