
import React from 'react';
import sanityClient from '../configs/sanity-client'
import imageUrlBuilder from '@sanity/image-url';
import ProgressiveImage from './progressive-image';

const imageBuilder = imageUrlBuilder(sanityClient);
export default function SizedImage({ url, style = {}, size = [400, 533], ...props }) {
    const sizeObject = { width: `${size[0]}px`, height: `${size[1]}px` };
    let image = <img {...props} className={props["className"]} {...sizeObject} />;
    try {
        const thumbWidth = 3
        const thumbHeight = Math.round((thumbWidth * size[1]) / size[0]);
        const mainSrc = imageBuilder.image(url).size(size[0], size[1]).url();
        const thumbnailSrc = imageBuilder.image(url).size(thumbWidth, thumbHeight).url();
        image = <ProgressiveImage mainSrc={mainSrc} thumbnailSrc={thumbnailSrc} {...props} size={sizeObject} />
    } catch (error) {
    }
    return image;
}
