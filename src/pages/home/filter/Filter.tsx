import { FC, useState } from "react";
import styles from "./Filter.module.css";
import { Categories } from "types/entities/filter";

export const Filter: FC<Categories> = ({ categories }) => {
  type CarLiteralType = keyof typeof categories

  const [buttonActiveClass, setButtonActiveClass] = useState<string>("all");

  const filterCategoryProducts = (category: string) => {
    setButtonActiveClass(category);
  };

  const getCategoryName = (category: string) => {
    const name =
      categories[category as CarLiteralType].charAt(0).toUpperCase() +
      categories[category as CarLiteralType].slice(1);
    return name;
  };

  const getButtonClass = (category: string) => {
    if (category === buttonActiveClass) {
      return `${styles.buttonFilter} ${styles.buttonFilterActive}`;
    }

    return `${styles.buttonFilter}`;
  };

  return (
    <div className={styles.filterContainer}>
      {Object.keys(categories).map(category => (
        <button
          className={`${getButtonClass(category)}`}
          onClick={() =>
            filterCategoryProducts(category)
          }
          key={category}
        >
          {getCategoryName(category)}
        </button>
      ))}
    </div>
  );
};
