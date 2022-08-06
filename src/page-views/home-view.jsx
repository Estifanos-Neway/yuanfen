
import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../configs/sanity-client'
import { Notice, Category, ProductsRow, Retry, LandingImage, Loading } from '../components'
import { HashLink } from 'react-router-hash-link';
import Flicking from '@egjs/react-flicking';
import { companyName, description, whatAreWe, youCanComeWith } from '../commons/strings';

const imageBuilder = imageUrlBuilder(sanityClient);

export default function HomeView({ landingImages, other, notices, categories, products }) {
    try {
        return (
            <div className='w-full ' id="hero">
                <div className='relative'>
                    {/* <Header rightInfo={<p>Dresses</p>}/>
                    <Header rightInfo={<p className=' flex items-center gap-1'>ft4ftr4FTr <div className='bg-gray-400 rounded w-px h-5'></div> 2300 birr</p>}/> */}
                    {/* <Header rightInfo={<p>Dresses</p>}/> */}
                    <div className='flex w-full items-start justify-end overflow-y-hidden h-screen' style={{ minHeight: "320px", maxHeight: "780px" }}>
                        <div className='landingCol'>
                            <LandingImage url={landingImages[1]} size={[400, 200]} />
                            <div className='w-full flex flex-col justify-center items-center md:items-end py-14 whitespace-nowrap lg:pr-9 md:pr-4 '>
                                <div className='font-logo text-3xl xxs:text-4xl md:text-7xl font-bold nameHero'>{companyName.toUpperCase()}</div>
                                <div className='font-subLogo text-md xxs:text-xl md:text-2xl nameHero'>{whatAreWe}&nbsp;</div>
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
                        <HashLink smooth to="#footerOrder">
                            <div className='bg-white rounded-lg shadow-2xl border border-gray-300 shadow-black p-1.5 px-7 text-lg'>
                                Order now
                            </div>
                        </HashLink>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='flex flex-col items-center w-full gap-7'>
                        <div className='flex flex-col items-center w-full gap-2 text-center text-2xl px-11 max-w-lg'>
                            <div className='border-2 border-black py-11 px-5 font-medium'>
                                <p>{description}</p>
                            </div>
                            <div className=''>
                                <p>{youCanComeWith}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 px-4 '>
                            {notices.map((notice, index) => <Notice title={notice.title} detail={notice.detail} key={index} />)}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:items-center'>
                    {
                        categories.length ?
                            <div className='w-full max-w-[960px] px-6 md:px-8'>
                                <div className='mb-10'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-semibold'>Our Products</p>
                                        <div className='px-2 md:px-3'>
                                            <Flicking className="overflow-visible" bound={true} bounce={0} align="prev" renderOnlyVisible={true}>
                                                {categories.map((category, index) => <div className="flicking-panel mr-3" key={index}><Category key={index} name={category.name} imageUrl={imageBuilder.image(category.image).size(50, 50).url()} /></div>)}
                                                <div className="flicking-panel inline-flex justify-center items-center text-center w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 primaryGradientBg" key={categories.length}>
                                                    <p className='font-bold text-[9px]'>and More</p>
                                                </div>
                                            </Flicking>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-10 md:gap-14'>
                                    {categories.map((category, index) => <ProductsRow key={index} categoryName={category.name} productList={products[category.name].slice(0, 3)} />)}
                                    <div className='text-center p-4 rounded-lg mx-2 md:mx-4 primaryGradientBg'>
                                        <p className='text-xl'>
                                            {youCanComeWith}
                                        </p>
                                    </div>
                                </div>
                            </div> :
                            <div className="w-full flex justify-center items-center p-5">
                                <Loading />
                            </div>
                    }
                </div>
            </div>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
