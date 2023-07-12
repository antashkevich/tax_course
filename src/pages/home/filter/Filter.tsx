import styles from './Filter.module.css'
import { ProductCategoriesKeys, ProductsCategories } from 'types/entities/productCategories'
import cn from 'classnames'
import { FC } from 'react'

type FilterPopsType  = {
  setButtonActiveClass: (category: ProductCategoriesKeys) => void,
  buttonActiveClass: ProductCategoriesKeys,
  filterProducts: (category: ProductCategoriesKeys) => void
}

export const Filter: FC<FilterPopsType> = ({
  setButtonActiveClass,
  buttonActiveClass,
  filterProducts
 }) => {

  const filterCategoryProducts = (category: ProductCategoriesKeys) => {
    setButtonActiveClass(category);
    filterProducts(category)
  };

  const getCategoryName = (category: ProductCategoriesKeys) => {
    return ProductsCategories[category].charAt(0).toUpperCase() +
      ProductsCategories[category].slice(1);
  };

  return (
    <div className={styles.filterContainer}>
      {(Object.keys(ProductsCategories) as ProductCategoriesKeys[]).map(category => (
        <button
          className={cn(styles.buttonFilter, {
            [styles.buttonFilterActive as string]: category === buttonActiveClass,
          })}
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
