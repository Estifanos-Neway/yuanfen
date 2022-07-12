
import { Link } from "react-router-dom"
import { Product } from "./"
export default function ProductRow({ categoryName, productList }) {
  try {
    return (
      <div>
        ----------------------------------------------------------------------------------------------------------
        <br />
        <b>{categoryName}</b> <Link to={`/categories/${categoryName}`}>see more</Link>
        {productList.map((product, index) => <Product key={index} _id={product._id} price={product.price} imageUrl={product.primaryImage.asset.url} />)}
        <button>Order now</button>
      </div>
    )
  } catch (error) {
    console.error("error");
            console.dir(error,{depth:null});

  }

}
