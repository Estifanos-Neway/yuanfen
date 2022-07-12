import { useState, useEffect } from "react";
import sanityClient from "../configs/sanity-client.js";
import imageUrlBuilder from '@sanity/image-url';
import {
    HomeView,
    Layout,
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
    const { products } = useContextProvider();

    useEffect(() => {
        try {
            sanityClient.fetch(othersQuery).then((othersQueryRes) => {
                setOther(othersQueryRes[0]);

                sanityClient.fetch(landingImagesQuery).then((landingImagesQueryRes) => {
                    setLandingImages(landingImagesQueryRes[0].images.map(landingImage => landingImage.asset.url));
                    // setLandingImages(landingImagesQueryRes[0].images.map(landingImage => imageBuilder.image(landingImage).size(225, 300).url()));

                    sanityClient.fetch(noticesQuery).then((noticesQueryRes) => {
                        setNotices(noticesQueryRes);
                    });
                });
            })
        } catch (error) {
            console.error("error");
            console.dir(error, { depth: null })
        }

    }, []);
    useEffect(() => {
        try {
            sanityClient.fetch(categoriesQuery).then((categoriesQueryRes) => {
                categoriesQueryRes = categoriesQueryRes.filter(category => category.name in products);
                categoriesQueryRes.sort((a, b) => a.priority > b.priority ? -1 : 1);
                setCategories(categoriesQueryRes);
            });
        } catch (error) {
            console.error("error");
            console.dir(error, { depth: null })
        }

    }, [Object.keys(products).length]);

    return (
        <Layout>
            {<HomeView landingImages={landingImages} other={other} notices={notices} categories={categories} products={products} />}
        </Layout>
    )
}
