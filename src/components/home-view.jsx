
import imageUrlBuilder from '@sanity/image-url';
import ProgressiveImage from 'react-progressive-image-loading';
import sanityClient from '../configs/sanity-client'
import { Notice, Category, ProductRow, Retry } from './'
import ProgressiveImage34 from './progressive-image-34';

const imageBuilder = imageUrlBuilder(sanityClient)

export default function HomeView({ landingImages, other, notices, categories, products }) {
    try {
        return (
            <div className='w-full'>
                <div className=''>
                    <div className='flex w-full items-start overflow-y-hidden h-screen' style={{ "minHeight": "320px", "minWidth": "360px" }}>
                        <div className='landingCol'>
                            <ProgressiveImage34 className="landingImage" url={landingImages[1]} size={[300, 150]} />
                            <div id="landingLogoCon" className='flex flex-col justify-center items-center'>
                                <div className='font-logo text-4xl font-bold'>YUANFEN</div>
                                <div className='font-subLogo'>{other.whatAreWe}</div>
                            </div>
                            <ProgressiveImage34 className="landingImage" url={landingImages[9]} size={[300, 350]} />
                            <ProgressiveImage34 className="landingImage" url={landingImages[10]} />
                            <ProgressiveImage34 className="landingImage" url={landingImages[2]} />
                        </div>
                            <div className='landingCol'>
                                <ProgressiveImage34 className='landingImage' url={landingImages[4]} size={[300, 220]} />
                                <ProgressiveImage34 className='landingImage' url={landingImages[12]} size={[300, 290]} />
                                <ProgressiveImage34 className='landingImage' url={landingImages[13]} size={[300, 400]} />
                                <ProgressiveImage34 className='landingImage' url={landingImages[11]} />
                                <ProgressiveImage34 className='landingImage' url={landingImages[3]} />
                            </div>
                            <div className='landingCol landingCol3'>
                                <ProgressiveImage34 className='landingImage' url={landingImages[4]} size={[300, 220]} />
                                <ProgressiveImage34 className='landingImage' url={landingImages[12]} size={[300, 290]} />
                                <ProgressiveImage34 className='landingImage' url={landingImages[13]} size={[300, 400]} />
                                <ProgressiveImage34 className='landingImage' url={landingImages[11]} />
                                <ProgressiveImage34 className='landingImage' url={landingImages[3]} />
                            </div>
                    </div>
                    <div className='sm:hidden fixed flex w-screen  bottom-5 justify-center'>
                        <div className='bg-white rounded-lg shadow-2xl shadow-black p-1.5 px-7 text-xl'>
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
                {categories.map((category, index) => <Category key={index} name={category.name} imageUrl={imageBuilder.image(category.image).size(50, 50).url()} />)}
                {categories.map((category, index) => <ProductRow key={index} categoryName={category.name} productList={products[category.name]} />)}
            </div>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
