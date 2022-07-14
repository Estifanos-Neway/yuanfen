
import sanityClient from '../configs/sanity-client'
import imageUrlBuilder from '@sanity/image-url';

const imageBuilder = imageUrlBuilder(sanityClient)
export default function SizedImage({ url, className = "", id = "", style = {}, size = [400, 467] }) {
    try {
        const src = imageBuilder.image(url).size(size[0], size[1]).url();
        return <img className={className} id={id} src={src} style={style} />
    } catch (error) {
    }

}
