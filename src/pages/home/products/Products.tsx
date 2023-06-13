import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import { ProductCard } from "../productCard";
import { Product } from "types/entities/product";
import { Loader } from "components/loader";
import { ProductsCategories } from "types/entities/productCategories";

export const Products = () => {
  const [data, setData] = useState<null | Product[]>(null);
  const [dataFilter, setDataFilter] = useState<
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
        setData(res.data);
        setDataFilter(res.data);
      })
      .catch(e => console.log(e));
  }, [amountProducts]);

  const filterCategoryProducts = (category: string) => {
    setActiveClass(category);

    if (category === "all") {
      return setDataFilter(data);
    }
    if (data) {
      const arr = data.filter(product => product.category === category);
      return setDataFilter(arr);
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
      {data ? (
        <div className={styles.productsCard}>
          {dataFilter?.map(product => (
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
