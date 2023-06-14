import { LangsList } from "types/entities/langs";
import styles from "./LangsDropdown.module.css";
import { useState } from "react";

type LangsListValue = keyof typeof LangsList

export const LangsDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<`${LangsList}`>(LangsList.eng);

  const actionDropdownLang = () => {
    setIsOpen(!isOpen);
  };

  const chooseLang = (language: LangsListValue) => {
    const languageValue = LangsList[language]
    setLang(languageValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.langsContainer}>
      <button onClick={() => actionDropdownLang()} className={styles.buttonLang}>
        {lang}
      </button>
      <ul
        className={`${styles.langList} ${
          isOpen ? styles.langListOpen : styles.langListClose
        }`}
      >
        {Object.keys(LangsList).map(language => (
          <button onClick={() => chooseLang(language as LangsListValue)} key={language}>
            {LangsList[language as LangsListValue]}
          </button>
        ))}
      </ul>
    </div>
  );
};
