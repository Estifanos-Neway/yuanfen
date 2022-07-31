import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { SizedImage, Retry } from '../components';

const handleDragStart = (e) => e.preventDefault();
export default function ProductView({ _id, categoryName, imageUrls, productId }) {
    try {
        const items = imageUrls.map((url, index) => <SizedImage key={index} url={url} size={[265, 350]}/>)
        return (
            <div className=''>
                <b>{`${categoryName[0]}#${productId}`}</b>
                <div>
                    <AliceCarousel disableSlideInfo={false} keyboardNavigation disableButtonsControls renderDotsItem={(e) => { return <img className='w-14' src={imageUrls[e.activeIndex]}/> }} mouseTracking items={items} />
                </div>
                <Link to={`/order/${_id}`} >Order this</Link>
            </div>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
