import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sanityClient from "../configs/sanity-client.js";
import { DetailView, Layout } from "../components";

export default function Products() {
  const params = useParams();
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState([])
  useEffect(() => {
    const productQuery = `*[_id == '${params.productId}']{primaryImage{asset->{url}}, secondaryImages[]{asset->{url}}}`;
    sanityClient.fetch(productQuery).then((productQueryRes) => {
      if (productQueryRes.length < 1) {
        navigate("../notfound", { replace: true });
      } else {
        setImageUrls([productQueryRes[0].primaryImage.asset.url, ...((productQueryRes[0].secondaryImages?.map(image => image.asset.url)) ?? [])])
      }
    })
  }, [])
  return (
    <Layout>
      {<DetailView _id={params.productId} imageUrls={imageUrls} />}
    </Layout>
  )
}
