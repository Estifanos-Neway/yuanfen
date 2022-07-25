import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sanityClient from "../configs/sanity-client.js";
import { Layout, Loading, Retry } from "../components";
import { ProductDetailView } from "../page-views";

export default function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [pageContent, setPageContent] = useState(<Loading />)
  useEffect(() => {
    try {
      const productQuery = `*[_id == '${params.productId}']{category->,primaryImage{asset->{url}}, secondaryImages[]{asset->{url}}, productId}`;
      sanityClient.fetch(productQuery).then((productQueryRes) => {
        if (productQueryRes.length < 1) {
          navigate("../notfound", { replace: true });
        } else {
          const imageUrls = [productQueryRes[0].primaryImage.asset.url, ...((productQueryRes[0].secondaryImages?.map(image => image.asset.url)) ?? [])];
          setPageContent(<ProductDetailView _id={params.productId} categoryName={productQueryRes[0].category.name} imageUrls={imageUrls} productId={productQueryRes[0].productId} />)
        }
      })
    } catch (error) {
      console.error("error");
      console.dir(error, { depth: null });
      setPageContent(<Retry />);
    }

  }, []);
  return (
    <Layout>
      {pageContent}
    </Layout>
  )
}
