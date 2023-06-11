import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ProductsWrapper.module.css";
import { ProductCard } from "../productCard";
import { Product, ProductsCategories } from "types/entities/product";
import { Loader } from "components/loader";

export const ProductsWrapper = () => {
  const [dataProducts, setDataProducts] = useState<null | Product[]>(null);
  const [dataFilterProducts, setDataFilterProducts] = useState<
    null | Product[]
  >(null);
  const [amountProducts, setAmountProducts] = useState<number>(10);
  const [btnActiveClass, setActiveClass] = useState<string>("all");

  const productCategory: ProductsCategories = {
    all: "all",
    mens: "men's clothing",
    womens: "women's clothing",
    jewelery: "jewelery",
    electronics: "electronics",
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${amountProducts}`)
      .then(function (res) {
        setDataProducts(res.data);
        setDataFilterProducts(res.data);
      })
      .catch(e => console.log(e));
  }, [amountProducts]);

  const filterCategoryProducts = (category: string) => {
    setActiveClass(category);

    if (category === "all") {
      return setDataFilterProducts(dataProducts);
    }
    if (dataProducts) {
      const arr = dataProducts.filter(product => product.category === category);
      return setDataFilterProducts(arr);
    }
  };

  const addMoreProducts = () => {
    const getAmountProducts = amountProducts + 5;
    setAmountProducts(getAmountProducts);
  };

  const getCategoryName = (category: string) => {
    const name =
      productCategory[category].charAt(0).toUpperCase() +
      productCategory[category].slice(1);
    return name;
  };

  const getBtnClass = (category: string) => {
    if (productCategory[category] === btnActiveClass) {
      return `${styles.btnFilter} ${styles.btnFilterActive}`;
    }

    return `${styles.btnFilter}`;
  };
  const getFilterBtns = () => {
    const categoriesBtns = Object.keys(productCategory);

    return categoriesBtns.map(category => (
      <button
        className={`${getBtnClass(category)}`}
        onClick={() => filterCategoryProducts(productCategory[category])}
        key={category}
      >
        {getCategoryName(category)}
      </button>
    ));
  };

  return (
    <main className={styles.main}>
      <div className={styles.filterContainer}>{getFilterBtns()}</div>
      {dataProducts ? (
        <div className={styles.productsCard}>
          {dataFilterProducts?.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      <button className={styles.btnMore} onClick={addMoreProducts}>
        Show more
      </button>
    </main>
  );
};
