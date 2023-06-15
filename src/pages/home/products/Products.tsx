import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "types/entities/product";
import { ProductsCategories } from "types/entities/productCategories";
import { Loader } from "components/loader";
import { ProductCard } from "../productCard";
import { Filter } from "../filter";
import styles from "./Products.module.css";

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

  // const getCategoryName = (category: ProductsCategoriesValue) => {
  //   const name =
  //     ProductsCategories[category].charAt(0).toUpperCase() +
  //     ProductsCategories[category].slice(1);
  //   return name;
  // };

  // const getButtonClass = (category: ProductsCategoriesValue) => {
  //   if (category === buttonActiveClass) {
  //     return `${styles.buttonFilter} ${styles.buttonFilterActive}`;
  //   }

  //   return `${styles.buttonFilter}`;
  // };

  return (
    <main className={styles.main}>
      {/* <div className={styles.filterContainer}>{getFilterButtons()}</div> */}
      <Filter
        categories = {ProductsCategories}
      />
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
