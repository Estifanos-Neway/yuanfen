import React from 'react';
import { Link } from 'react-router-dom';
import { SizedImage, Retry, PreviewCarousel, Header } from '../components';

export default function ProductView({ _id, categoryName, imageUrls, productId, price = undefined }) {
    try {
        return (
            <div className='flex flex-col items-center gap-5 px-5 pt-4 md:pt-5 pb-10'>
                <Header rightInfo={<p className='flex items-center gap-1'>{productId} <div className='bg-gray-400 rounded w-px h-5'></div> {price? price : "-"} birr</p>} />
                <div className="flex flex-col items-center gap-2">
                    <div className="text-lg"><b>{productId}</b> (from {categoryName})</div>
                    <div className="w-[70px] divider"></div>
                </div>
                <div>
                    <PreviewCarousel
                        items={imageUrls}
                        builder={
                            (imageUrl) => <SizedImage url={imageUrl} size={[262, 350]} className="imageCard" />
                        }
                        previewBuilder={
                            (preview) => <div className='mx-2 flex flex-col items-center gap-2'>
                                <SizedImage url={preview.item} size={[60, 80]} className="imageCard" />
                                {
                                    preview.isCurrent ?
                                        <div className='w-3 divider'></div>
                                        : <></>
                                }
                            </div>
                        }
                        className="flex flex-col items-center gap-12"
                    />
                </div>
                <Link to={`/order/${_id}`} className="w-[262px] button">Order this</Link>
            </div>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
