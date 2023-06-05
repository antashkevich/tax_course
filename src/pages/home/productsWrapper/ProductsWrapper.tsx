import React, { useEffect, useState } from "react";
import axios from 'axios'
import styles from "./ProductsWrapper.module.css"
import { Link } from "react-router-dom";
import { ProductProps } from "src/types/types";

export const ProductsWrapper = () => {
  const [dataProducts, setDataProducts] = useState<ProductProps[]>([])

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
      {dataProducts.map(product => <Link to={`/product/${product.id}`} className={styles.productCard} key={product.id}>
          <div>
            <img className={styles.productImage} src={product.image} />
          </div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </Link>)}
      </div>
    </>
  )
}


{/*  */}
