import { useEffect, useState } from "react";
import axios from 'axios'
import styles from "./ProductsWrapper.module.css"
import { ProductProps } from "src/types/types";
import { ProductCard } from "../productCard";
import { Link } from "react-router-dom";
import { Product as ProductType } from "types/entities/product";

export const ProductsWrapper = () => {
  const [dataProducts, setDataProducts] = useState<Array<ProductType>>([])

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
        {dataProducts.map(product => <ProductCard product={product} key={product.id} />)}
      </div>
    </>
  )
}


{/*  */}
