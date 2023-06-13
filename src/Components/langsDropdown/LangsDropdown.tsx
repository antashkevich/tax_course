import { LangsList } from "types/entities/langs";
import styles from "./LangsDropdown.module.css";
import { useState } from "react";

export const LangsDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<`${LangsList}`>(LangsList.eng);

  const actionDropdownLang = () => {
    setIsOpen(!isOpen);
  };

  const chooseLang = (language: string) => {
    const languageValue = LangsList[language as keyof typeof LangsList]
    setLang(languageValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.langsContainer}>
      <button onClick={() => actionDropdownLang()} className={styles.btnLang}>
        {lang}
      </button>
      <ul
        className={`${styles.langList} ${
          isOpen ? styles.langListOpen : styles.langListClose
        }`}
      >
        {Object.keys(LangsList).map(language => (
          <button onClick={() => chooseLang(language)} key={language}>
            {LangsList[language as keyof typeof LangsList]}
          </button>
        ))}
      </ul>
    </div>
  );
};
