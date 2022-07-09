import {Product} from "./";

export default function More({categoryName, productList}) {
  return (
    <div>
        <p>{categoryName}</p>
        {productList.map((product, index) => <Product key={index} _id={product._id} price={product.price} imageUrl={product.primaryImage.asset.url}/>)}
    </div>
  )
}
