import styles from './Filter.module.css';
import { ProductsCategories, ProductCategoriesKeys } from 'types/entities/productCategories'
import cn from 'classnames';

type FilterPopsType  = {
  setButtonActiveClass: (category: ProductCategoriesKeys) => void,
  buttonActiveClass: ProductCategoriesKeys,
  filterProducts: (category: ProductCategoriesKeys) => void
}

export const Filter: React.FC<FilterPopsType> = ({ 
  setButtonActiveClass,
  buttonActiveClass,
  filterProducts
 }) => {

  const filterCategoryProducts = (category: ProductCategoriesKeys) => {
    setButtonActiveClass(category);
    filterProducts(category)
  };

  const getCategoryName = (category: ProductCategoriesKeys) => {
    const name =
      ProductsCategories[category].charAt(0).toUpperCase() +
      ProductsCategories[category].slice(1);
    return name;
  };

  return (
    <div className={styles.filterContainer}>
      {(Object.keys(ProductsCategories) as ProductCategoriesKeys[]).map(category => (
        <button
          className={cn(styles.buttonFilter, {
            [styles.buttonFilterActive]: category === buttonActiveClass,
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
