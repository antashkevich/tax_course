import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ProductProps } from "src/types/types";

export const Product = () => {
  const { productId } = useParams();
  const [dataProduct, setDataProduct] = useState<ProductProps>({})

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(function (res) {
        setDataProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [productId]);

  return (
    <>
      <div>
        <div>
            <img src={dataProduct.image} />
          </div>
          <h2>{dataProduct.title}</h2>
          <p>{dataProduct.description}</p>
          <p>{dataProduct.price}</p>
      </div>
    </>
  )
}
