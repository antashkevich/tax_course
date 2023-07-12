import { LangsList, LangsListValue } from "types/entities/langs";
import styles from "./LanguagesDropdown.module.css";
import { useState } from "react";
import cn from "classnames";

export const LanguagesDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<LangsList>(LangsList.eng);

  const actionDropdownLang = () => {
    setIsOpen(!isOpen);
  };

  const chooseLang = (language: LangsListValue) => {
    const languageValue = LangsList[language];
    setLang(languageValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.langsContainer}>
      <button onClick={actionDropdownLang} className={styles.buttonLang}>
        {lang}
      </button>
      <ul
        className={cn(styles.langList, {
          [styles.langListOpen as string]: isOpen,
        })}
      >
        {(Object.keys(LangsList) as LangsListValue[]).map((language) => (
          <button onClick={() => chooseLang(language)} key={language}>
            {LangsList[language]}
          </button>
        ))}
      </ul>
    </div>
  );
};
