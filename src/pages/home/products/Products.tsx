import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import { ProductCard } from "../productCard";
import { Product } from "types/entities/product";
import { Loader } from "components/loader";
import { ProductsCategories } from "types/entities/productCategories";

type ProductsCategoriesValue = keyof typeof ProductsCategories;

export const Products = () => {
  const [data, setData] = useState<null | Product[]>(null);
  const [amountProducts, setAmountProducts] = useState<number>(6);
  const [buttonActiveClass, setButtonActiveClass] = useState<string>("all");
  const [isEnabledButtonMore, setIsEnabledButtonMore] = useState<boolean>(true);
  const [loadButtonMore, setLoadButtonMore] = useState<boolean>(false);

  useEffect(() => {
    const baseUrl = "https://fakestoreapi.com/products";
    const url =
      buttonActiveClass === "all"
        ? `${baseUrl}/?limit=${amountProducts}`
        : `${baseUrl}/category/${
            ProductsCategories[buttonActiveClass as ProductsCategoriesValue]
          }?limit=${amountProducts}`;
    axios
      .get(url)
      .then(function (res) {
        setData(res.data);
        setLoadButtonMore(false);
        if (amountProducts > res.data.length) {
          setIsEnabledButtonMore(false);
        }
      })
      .catch(e => console.log(e));
  }, [buttonActiveClass, amountProducts]);

  const filterCategoryProducts = (category: string) => {
    setData(null);
    setIsEnabledButtonMore(true);
    setAmountProducts(6);
    setButtonActiveClass(category);
  };

  const showMoreProducts = () => {
    const getAmountProducts = amountProducts + 5;
    setAmountProducts(getAmountProducts);
    setLoadButtonMore(true);
  };

  const getCategoryName = (category: ProductsCategoriesValue) => {
    const name =
      ProductsCategories[category].charAt(0).toUpperCase() +
      ProductsCategories[category].slice(1);
    return name;
  };

  const getButtonClass = (category: ProductsCategoriesValue) => {
    if (category === buttonActiveClass) {
      return `${styles.buttonFilter} ${styles.buttonFilterActive}`;
    }

    return `${styles.buttonFilter}`;
  };

  const getFilterButtons = () => {
    return Object.keys(ProductsCategories).map(category => (
      <button
        className={`${getButtonClass(category as ProductsCategoriesValue)}`}
        onClick={() =>
          filterCategoryProducts(category as ProductsCategoriesValue)
        }
        key={category}
      >
        {getCategoryName(category as ProductsCategoriesValue)}
      </button>
    ));
  };

  return (
    <main className={styles.main}>
      <div className={styles.filterContainer}>{getFilterButtons()}</div>
      <div className={styles.productsCard}>
        {data ? (
          data
            .filter((_product, index) => index < amountProducts - 1)
            .map(product => <ProductCard product={product} key={product.id} />)
        ) : (
          <Loader staticPosition={true} />
        )}
      </div>
      {isEnabledButtonMore && (
        <button className={styles.buttonMore} onClick={showMoreProducts}>
          {loadButtonMore ? "Load..." : "Show more"}
        </button>
      )}
    </main>
  );
};
