import { useEffect, useState } from "react";
import axios from 'axios'
import styles from "./ProductsWrapper.module.css"
import { ProductCard } from "../productCard";
import { Product } from "types/entities/product";

export const ProductsWrapper = () => {
  const [dataProducts, setDataProducts] = useState<null | Product[]>(null)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=20')
      .then(function (res) {
        setDataProducts(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className={styles.productsCard}>
        {dataProducts?.map(product => <ProductCard product={product} key={product.id} />)}
      </div>
    </>
  )
}
