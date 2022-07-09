import { Link } from "react-router-dom";

export default function Product({ _id, price, imageUrl }) {

    return (
        <div>
            <Link to={`/products/${_id}`}><img src={imageUrl} style={{height:100}}/></Link>
            <p>{price} birr</p>
            <br/>
            <Link to={`/order/${_id}`} >Order this</Link>
        </div>
    )
}
