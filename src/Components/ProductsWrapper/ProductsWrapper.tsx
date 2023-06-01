import React, { useEffect, useState } from "react";
import axios from 'axios'
import styles from "./ProductsWrapper.module.css"

type ProductProps = {
  id: number,
  image: string,
  title: number,
  description: string,
  price: string
}

const ProductsWrapper = () => {
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
      <h2>Lorem, ipsum.</h2>
      <div className={styles.productsCard}>
        {dataProducts.map(product => <div className={styles.productCard} key={product.id}>
          <div><img className={styles.productImage} src={product.image} /></div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>)}
      </div>
    </>
  )
}

export default ProductsWrapper