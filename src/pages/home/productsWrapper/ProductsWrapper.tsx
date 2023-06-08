import { useEffect, useState } from "react";
import axios from 'axios'
import styles from "./ProductsWrapper.module.css"
import { ProductCard } from "../productCard";
import { Product, ProductsCategories } from "types/entities/product";

export const ProductsWrapper = () => {
  const [dataProducts, setDataProducts] = useState<null | Product[]>(null)
  const [dataFilterProducts, setDataFilterProducts] = useState<null | Product[]>(null)

  const ProductCategory: ProductsCategories = {
    all: 'all',
    mens: 'men\'s clothing',
    womens:'women\'s clothing',
    jewelery:'jewelery',
    electronics: 'electronics'
  }

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=20')
      .then(function (res) {
        setDataProducts(res.data);
        setDataFilterProducts(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const filterCategoryProducts = (category: string) => {
    if (category === 'all') {
      return setDataFilterProducts(dataProducts)
    }
    if (dataProducts) {
      const arr = dataProducts.filter(product => product.category === category)
      setDataFilterProducts(arr)
    }
  }

  const getCategoryName = (category: string) => {
    const name = ProductCategory[category].charAt(0).toUpperCase() + ProductCategory[category].slice(1)
    return name
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Make their day extra special with a handcrafted bouquet.</h1>
      <div className={styles.sortContainer}>
        {Object.keys(ProductCategory).map((category) => <button onClick={() => filterCategoryProducts(ProductCategory[category])} key={category}>{getCategoryName(category)}</button>
        )}
      </div>
      {
        dataProducts ?
          <div className={styles.productsCard}>
            {dataFilterProducts?.map(product => <ProductCard product={product} key={product.id} />)}
          </div>
          :
          <div className={styles.loader}>Loader</div>
      }
    </main>
  )
}
