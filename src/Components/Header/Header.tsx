import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Icon } from "components/icon";
import { LanguagesDropdown } from "components/languagesDropdown";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerTop}>
        <div className={styles.headerContainer}>
          <Link to={"./"}>
            <Icon name="logo" className={styles.logoIcon} />
          </Link>
          <LanguagesDropdown />
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
              <li>
                <Link to={"./contacts"} className={styles.navLink}>
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>

          <button className={styles.buttonCart}>
            <Icon name="cart" className={styles.buttonCartIcon} />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
};
