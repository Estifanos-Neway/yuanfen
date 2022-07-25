
import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../configs/sanity-client'
import { Notice, Category, ProductsRow, Retry, LandingImage } from '../components'

const imageBuilder = imageUrlBuilder(sanityClient);

export default function HomeView({ landingImages, other, notices, categories, products }) {
    try {
        return (
            <div className='w-full'>
                <div className='relative'>
                    <div className='flex w-full items-start justify-end overflow-y-hidden h-screen' style={{ minHeight: "320px", maxHeight: "780px"}}>
                        <div className='landingCol'>
                            <LandingImage url={landingImages[1]} size={[400, 200]} />
                            <div className='w-full flex flex-col justify-center items-center md:items-end py-14 whitespace-nowrap lg:pr-9 md:pr-4 '>
                                <div className='font-logo text-3xl xxs:text-4xl md:text-7xl font-bold'>YUANFEN</div>
                                <div className='font-subLogo text-md xxs:text-xl md:text-2xl'>{other.whatAreWe}&nbsp;</div>
                            </div>
                            <LandingImage url={landingImages[9]} />
                            <LandingImage url={landingImages[10]} />
                            <LandingImage url={landingImages[2]} />
                        </div>
                        <div className='landingCol'>
                            <LandingImage url={landingImages[4]} size={[400, 266]} />
                            <LandingImage url={landingImages[12]} />
                            <LandingImage url={landingImages[13]} />
                            <LandingImage url={landingImages[6]} />
                            <LandingImage url={landingImages[3]} />
                        </div>
                        <div className='landingCol landingCol3'>
                            <LandingImage url={landingImages[5]} />
                            <LandingImage url={landingImages[11]} />
                            <LandingImage url={landingImages[0]} />
                            <LandingImage url={landingImages[8]} />
                            <LandingImage url={landingImages[7]} />
                        </div>
                    </div>
                    <div className='md:hidden absolute left-0 bottom-4 w-screen flex justify-center'>
                        <div className='bg-white rounded-lg shadow-2xl border border-gray-300 shadow-black p-1.5 px-7 text-lg'>
                            Order now
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='flex flex-col items-center w-full gap-7'>
                        <div className='flex flex-col items-center w-full gap-2 text-center text-2xl px-11 max-w-lg'>
                            <div className='border-2 border-black py-11 px-5 font-medium'>
                                <p>{other.description}</p>
                            </div>
                            <div className=''>
                                <p>{other.youCanComeWith}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 px-4 '>
                            {notices.map((notice, index) => <Notice title={notice.title} detail={notice.detail} key={index} />)}
                        </div>
                    </div>
                </div>
                <div className='pl-4 md:pl-10 mb-10'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold'>Our Products</p>
                        <div className='flex gap-3 pl-2 md:pl-3'>
                            {categories.map((category, index) => <Category key={index} name={category.name} imageUrl={imageBuilder.image(category.image).size(50, 50).url()} />)}
                            <div className="flex justify-center items-center text-center p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
                                <p className='font-bold' style={{ "fontSize": "9px" }}>and More</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-4 md:px-10 flex flex-col gap-4'> 
                    {categories.map((category, index) => <ProductsRow key={index} categoryName={category.name} productList={products[category.name]} />)}
                    <div className='bg-black text-center p-4 rounded-lg mx-2 md:mx-4'>
                        <p className='text-white text-xl'>
                            {other.youCanComeWith}
                        </p>
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
