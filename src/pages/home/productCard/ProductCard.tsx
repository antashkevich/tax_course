import React from "react";
import { Link } from "react-router-dom";
import { ProductProps } from "src/types/types";
import styles from "./productCard.module.css"

interface IProps {
  product: ProductProps
}

export const ProductCard = ({product}: IProps) => {

  return (
    <Link to={`/product/${product.id}`} className={styles.productCard} key={product.id}>
      <div>
        <img className={styles.productImage} src={product.image} />
      </div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </Link>
  )
}
