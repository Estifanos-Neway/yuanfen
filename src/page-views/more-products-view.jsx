import React, { useEffect } from "react";
import { companyName } from "../commons/strings";
import { Divider, Header, Product, Retry } from "../components";
import { capitalize } from "../commons/functions";

export default function MoreProductsView({ categoryName, productList }) {
  useEffect(() => {
    categoryName = capitalize(categoryName);
  }, [categoryName]);
  try {
    return (
      <div className="px-3 sm:px-12 lg:px-32 pt-4 pb-14 flex flex-col items-center gap-5">
        <Header rightInfo={<p>{categoryName}</p>} />
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg">{categoryName} by {capitalize(companyName)}</p>
          <div className="w-[60px] divider"></div>
        </div>
        <div className="grid w-full justify-evenly gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, 187.5px" }
        }>
          {productList.map((product, index) => <Product key={index} _id={product._id} price={product.price} imageUrl={product.primaryImage.asset.url} />)}
          <div className="flicking-panel" key={productList.length}><Product _id="" price="" imageUrl="" finalInList={true} /></div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("error");
    console.dir(error, { depth: null });
    return <Retry />
  }

}
