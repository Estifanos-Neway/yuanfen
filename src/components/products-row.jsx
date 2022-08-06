import React, { createRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "."

export default function ProductsRow({ categoryName, productList }) {
  useEffect(() => {
  })
  try {
    return (
      <div id={categoryName}>
        <div className="flex justify-between mb-2">
          <p className='font-semibold'>{categoryName}</p>
          <Link className="text-xs text-blue-500" to={`/categories/${categoryName}`}>
            see more
          </Link>
        </div>
        <div className="relative px-2 md:px-3">
          <div className="grid w-full justify-evenly gap-5 md:gap-10 productRowListCon">
            {productList.map((product, index) => <Product key={index} _id={product._id} price={product.price} imageUrl={product.primaryImage.asset.url} />)}
            <div className="flicking-panel" key={productList.length}><Product _id="" price="" imageUrl="" finalInList={true} /></div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("error");
    console.dir(error, { depth: null });
    return <></>
  }

}
