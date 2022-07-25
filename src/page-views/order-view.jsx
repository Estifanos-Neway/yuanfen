import React from 'react';
import { Retry, SizedImage } from '../components'

export default function OrderView({ categoryName, imageUrl, message, productId }) {
    try {
        return (
            <div>
                <b>{`Ordering ${categoryName[0]}#${productId}`}</b>
                <SizedImage url={imageUrl} />
                <p>{message}</p>
                <button>Submit order</button>
            </div>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
