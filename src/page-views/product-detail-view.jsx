import React from 'react';
import { Link } from 'react-router-dom'
import { SizedImage, Retry } from '../components';
export default function ProductView({ _id, categoryName, imageUrls, productId }) {
    try {
        return (
            <div>
                <b>{`${categoryName[0]}#${productId}`}</b>
                {imageUrls.map((url, index) => <SizedImage key={index} url={url} />)}
                <Link to={`/order/${_id}`} >Order this</Link>
            </div>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
