import { FC, useState } from "react";
import styles from "./Filter.module.css";
import { ProductsCategories, ProductCategoriesKeys } from 'types/entities/productCategories'


export const Filter: FC = ({ buttonActiveClass, onChange }) => {


  const [buttonActiveClass, setButtonActiveClass] = useState<ProductCategoriesKeys>("all");

  const filterCategoryProducts = (category: ProductCategoriesKeys) => {
    setButtonActiveClass(category);
  };

  const getCategoryName = (category: ProductCategoriesKeys) => {
    const name =
      ProductsCategories[category].charAt(0).toUpperCase() +
      ProductsCategories[category].slice(1);
    return name;
  };

  const getButtonClass = (category: ProductCategoriesKeys) => {
    if (category === buttonActiveClass) {
      return `${styles.buttonFilter} ${styles.buttonFilterActive}`;
    }

    return `${styles.buttonFilter}`;
  };


  return (
    <div className={styles.filterContainer}>
      {(Object.keys(ProductsCategories) as ProductCategoriesKeys[]).map(category => (
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
