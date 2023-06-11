import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Icon } from "components/icon";
import { useState } from "react";
import { Lang } from "types/entities/product";

const langList: Lang = {
  en: "eng",
  es: "es",
  fr: "fr",
  it: "it",
};

export const Header = () => {
  const [isOpenDropdownList, setIsOpenDropdownList] = useState<boolean>(false);
  const [lang, setLang] = useState<string>(langList["en"]);

  const actionDropdownLang = () => {
    setIsOpenDropdownList(!isOpenDropdownList);
  };

  const chooseLang = (lang: string) => {
    setLang(langList[lang]);
    setIsOpenDropdownList(false);
  };

  return (
    <header>
      <div className={styles.headerTop}>
        <div className={styles.headerContainer}>
          <Link to={"./"}>
            <Icon name="logo" className={styles.logoIcon} />
          </Link>

          <div className={styles.langsContainer}>
            <button
              onClick={() => actionDropdownLang()}
              className={styles.btnLang}
            >
              {lang}
            </button>
            <ul
              className={`${styles.langList} ${
                isOpenDropdownList ? styles.langListOpen : styles.langListClose
              }`}
            >
              {Object.keys(langList).map(language => (
                <button
                  onClick={() => chooseLang(language)}
                  key={language}
                >
                  {langList[language]}
                </button>
              ))}
            </ul>
          </div>
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
