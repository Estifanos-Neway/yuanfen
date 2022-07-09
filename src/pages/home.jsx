import { useState, useEffect } from "react";
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from "../configs/sanity-client.js";
import {
    Category,
    LandingImage,
    Layout,
    Notice,
    ProductRow
} from "../components";
import { useContextProvider } from "../context"

const imageBuilder = imageUrlBuilder(sanityClient)

const othersQuery = "*[_type == 'other']{whatAreWe, description, youCanComeWith}"
const landingImagesQuery = "*[_type == 'landingImage']{images[]{asset->{url}}}"
const noticesQuery = "*[_type == 'notice']{title, detail}"
const categoriesQuery = "*[_type == 'category']{name, image{asset->{url}}, priority}"

export default function Home() {
    const [other, setOther] = useState({ whatAreWe: "", description: "", youCanComeWith: "" });
    const [landingImages, setLandingImages] = useState([])
    const [notices, setNotices] = useState([]);
    const [categories, setCategories] = useState([]);
    const { products, setProducts } = useContextProvider();
    useEffect(() => {
        sanityClient.fetch(othersQuery).then((othersQueryRes) => {
            setOther(othersQueryRes[0]);

            sanityClient.fetch(landingImagesQuery).then((landingImagesQueryRes) => {
                setLandingImages(landingImagesQueryRes[0].images.map(landingImage => landingImage.asset.url));

                sanityClient.fetch(noticesQuery).then((noticesQueryRes) => {
                    setNotices(noticesQueryRes);
                });
            });
        })
    }, []);
    useEffect(() => {
        sanityClient.fetch(categoriesQuery).then((categoriesQueryRes) => {
            categoriesQueryRes = categoriesQueryRes.filter(category => category.name in products);
            categoriesQueryRes.sort((a, b) => a.priority < b.priority ? -1 : 1);
            setCategories(categoriesQueryRes);
        });
    }, [Object.keys(products).length]);

    return (
        <Layout>
            <b>-----------Hero-----------</b>
            <br />
            {landingImages.map((landingImageUrl, index) => <LandingImage url={landingImageUrl} key={index} />)}
            <p>Yuanfen {other.whatAreWe}</p>
            <b>-----------Description-----------</b>
            <p>{other.description}</p>
            <p>{other.youCanComeWith}</p>
            {notices.map((notice, index) => <Notice title={notice.title} detail={notice.detail} key={index} />)}
            <b>-----------Our products-----------</b>
            {categories.map((category, index) => <Category key={index} name={category.name} imageUrl={imageBuilder.image(category.image.asset.url).height(60).url()} />)}
            {categories.map((category, index) => <ProductRow key={index} categoryName={category.name} productList={products[category.name]} />)}
        </Layout>
    )
}
