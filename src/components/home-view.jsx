
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../configs/sanity-client'
import { Notice, Category, ProductRow, Retry } from './'
import SizedImage from './sized-image';

const imageBuilder = imageUrlBuilder(sanityClient)

export default function HomeView({ landingImages, other, notices, categories, products }) {
    try {
        return (
            <div className='w-full'>
                <div className=''>
                    <div id="lcc" className='flex w-full items-start justify-end overflow-y-hidden h-screen' style={{ minHeight: "320px", maxHeight:"780px", minWidth: "240px" }}>
                        <div className='landingCol'>
                            <SizedImage className="landingImage" url={landingImages[1]} size={[400, 200]} />
                            <div className='w-full flex flex-col justify-center items-center md:items-end py-14 whitespace-nowrap lg:pr-9 md:pr-4 '>
                                <div className='font-logo text-3xl xxs:text-4xl md:text-7xl font-bold'>YUANFEN</div>
                                <div className='font-subLogo text-md xxs:text-xl md:text-2xl'>{other.whatAreWe}&nbsp;</div>
                            </div>
                            <SizedImage className="landingImage" url={landingImages[9]} />
                            <SizedImage className="landingImage" url={landingImages[10]} />
                            <SizedImage className="landingImage" url={landingImages[2]} />
                        </div>
                        <div className='landingCol'>
                            <SizedImage className='landingImage' url={landingImages[4]} size={[400, 266]} />
                            <SizedImage className='landingImage' url={landingImages[12]} />
                            <SizedImage className='landingImage' url={landingImages[13]} />
                            <SizedImage className='landingImage' url={landingImages[6]} />
                            <SizedImage className='landingImage' url={landingImages[3]} />
                        </div>
                        <div className='landingCol landingCol3'>
                            <SizedImage className='landingImage' url={landingImages[5]}  />
                            <SizedImage className='landingImage' url={landingImages[11]} />
                            <SizedImage className='landingImage' url={landingImages[0]} />
                            <SizedImage className='landingImage' url={landingImages[8]} />
                            <SizedImage className='landingImage' url={landingImages[7]} />
                        </div>
                    </div>
                    <div className='md:hidden fixed flex w-screen  bottom-4 justify-center'>
                        <div className='bg-white rounded-lg shadow-2xl border border-gray-300 shadow-black p-2 px-7 text-xl'>
                            Order now
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                {landingImages.map((landingImageUrl, index) => <img key={index} src={landingImageUrl} />)}
                <p>Yuanfen {other.whatAreWe}</p>
                <b>-----------Description-----------</b>
                <p>{other.description}</p>
                <p>{other.youCanComeWith}</p>
                {notices.map((notice, index) => <Notice title={notice.title} detail={notice.detail} key={index} />)}
                <b>-----------Our products-----------</b>
                {/* {categories.map((category, index) => <Category key={index} name={category.name} imageUrl={imageBuilder.image(category.image).size(50, 50).url()} />)}
                {categories.map((category, index) => <ProductRow key={index} categoryName={category.name} productList={products[category.name]} />)} */}
            </div>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
