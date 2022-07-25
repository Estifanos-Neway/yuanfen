import React, { useEffect } from "react";
import { Product, Retry } from "../components";

export default function MoreProductsView({ categoryName, productList }) {
  useEffect(() => {
    categoryName = `${categoryName[0].toUpperCase()}${categoryName.substring(1)}`;
  }, [categoryName]);
  try {
    return (
      <div>
        <p>{categoryName}</p>
        {productList.map((product, index) => <Product key={index} _id={product._id} price={product.price} imageUrl={product.primaryImage.asset.url} />)}
      </div>
    )
  } catch (error) {
    console.error("error");
    console.dir(error, { depth: null });
    return <Retry />
  }

}
