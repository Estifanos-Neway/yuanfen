import React from 'react';
import { Header, Retry, SizedImage } from '../components'
import { OrderForm } from '../components';

export default function OrderView({ imageUrl, message, productId, categoryName, price = undefined }) {
    try {
        return (
            <div className='flex flex-col items-center gap-5 px-5 pt-4 md:pt-5 pb-14'>
                <Header rightInfo={<p className='flex items-center gap-1'>{productId} <div className='bg-gray-400 rounded w-px h-5'></div> {price? price : "-"} birr</p>} />
                <div className="flex flex-col items-center gap-2">
                    <p className="text-lg">Ordering <b className='font-bold'>{productId}</b> (from {categoryName} )</p>
                    <div className="w-[120px] divider"></div>
                </div>
                <div className='flex flex-wrap justify-center gap-x-14 items-center gap-3'>
                    <SizedImage className='shadow-xl rounded-lg' url={imageUrl} size={[262, 350]} />
                    <div className='flex flex-col items-center gap-6'>
                        <p className='text-center max-w-sm sm:max-w-lg text-black'>{message}</p>
                        <OrderForm productId={productId} />
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
