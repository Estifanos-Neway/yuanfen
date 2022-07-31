import React from 'react';
import { Retry, SizedImage } from '../components'

export default function OrderView({ categoryName, imageUrl, message, productId }) {
    try {
        return (
            <div className='flex flex-col items-center gap-10 px-5 pt-8 pb-14'>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-lg">Ordering <span className='font-bold'>{productId}</span></p>
                    <div className="w-[120px] divider"></div>
                </div>
                <div className='flex flex-wrap justify-center gap-x-14 items-center gap-3'>
                    <SizedImage className='shadow-xl rounded-lg' url={imageUrl} size={[262, 350]} />
                    <div className='flex flex-col items-center gap-6'>
                        <p className='text-center max-w-sm sm:max-w-lg text-black'>{message}</p>
                        <form className="flex flex-col items-center gap-3">
                            <textarea placeholder="Where to contact you back: phone, telegram, facebook or other" rows={2} className="footerTextField"></textarea>
                            <textarea placeholder="What is your order?" rows={4} className="footerTextField"></textarea>
                            <input type="submit" value="Submit order" className="w-80 sm:w-[500px] shadow-lg p-2 rounded-lg primaryGradientBg" />
                        </form>
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
