import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Product as ProductType } from "types/entities/product";
import styles from "./product.module.css";
import { Loader } from "components/loader";

export const Product = () => {
  const { productId } = useParams();
  const [dataProduct, setDataProduct] = useState<null | ProductType>(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(function (res) {
        setDataProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [productId]);

  return (
    <>
      {dataProduct ? (
        <div>
          <div>
            <img className={styles.productImage} src={dataProduct?.image} />
          </div>
          <h2>{dataProduct.title}</h2>
          <p>{dataProduct.description}</p>
          <p>{dataProduct.price}</p>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
