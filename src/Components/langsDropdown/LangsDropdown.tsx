import { LangsList, LangsListValue } from 'types/entities/langs';
import styles from './LangsDropdown.module.css';
import { useState } from 'react';
import cn from 'classnames';

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
        className={cn(styles.langList, {
          [styles.langListOpen]: isOpen,
        })}
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
