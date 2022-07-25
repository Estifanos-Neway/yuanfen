import React, { createRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Product } from "."

export default function ProductsRow({ categoryName, productList }) {
  useEffect(() => {
    productList.push(productList[0])
    productList.push(productList[1])
    productList.push(productList[2])
    // productList.push(productList[3])
    // productList.push(productList[0])
    // productList.push(productList[1])
    // productList.push(productList[2])
    // productList.push(productList[3])
  })
  const flicking = createRef()
  try {
    // productList.push(productList[0])
    // productList.push(productList[1])
    // productList.push(productList[2])
    return (
      <div>
        <div className="flex justify-between mb-2">
          <p className='font-semibold'>{categoryName}</p>
          <Link className="text-xs text-blue-500" to={`/categories/${categoryName}`}>
            see more
          </Link>
        </div>
        <div className="relative h-[200px] ">
          <div className="pl-2 md:pl-4 z-0">
            <Flicking className="overflow-visible" bound={true} bounce={0} align="prev" renderOnlyVisible={true} ref={flicking}>
              {productList.map((product, index) => <div className="flicking-panel mr-5" key={index}><Product _id={product._id} price={product.price} imageUrl={product.primaryImage.asset.url} /></div>)}
              <div className="flicking-panel" key={productList.length}><Product _id="" price="" imageUrl="" finalInList={true} /></div>
            </Flicking>
          </div>
          {/* <FaChevronCircleLeft className="absolute left-0 top-1/2 z-10 text-xl" />
          <FaChevronCircleRight className="absolute right-0 top-1/2 z-10 text-xl" /> */}
        </div>
      </div>
    )
  } catch (error) {
    console.error("error");
    console.dir(error, { depth: null });
    return <></>
  }

}
