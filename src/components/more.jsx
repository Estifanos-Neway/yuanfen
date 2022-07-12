import { Product,Retry } from "./";

export default function More({ categoryName, productList }) {
  try {
    return (
      <div>
        <p>{categoryName}</p>
        {productList.map((product, index) => <Product key={index} _id={product._id} price={product.price} imageUrl={product.primaryImage.asset.url} />)}
      </div>
    )
  } catch (error) {
    console.error("error");
            console.dir(error,{depth:null});
    return <Retry />
  }

}
