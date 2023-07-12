import React from "react";
import { Link } from "react-router-dom";
import { Product } from "types/entities/product";
import styles from "./productCard.module.css";

type ProductProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className={styles.productCard}
      key={product.id}
    >
      <div className={styles.productImageContainer}>
        <img className={styles.productImage} src={product.image} />
      </div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </Link>
  );
};
