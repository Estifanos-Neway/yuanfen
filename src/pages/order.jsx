import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sanityClient from "../configs/sanity-client.js";
import { DetailView, Layout, OrderView } from "../components";

const messageQuery = "*[_type == 'other']{aboutToOrder}"

export default function Order() {
  const params = useParams();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("")
  const [message, setMessage] = useState("");
  useEffect(() => {
    const productQuery = `*[_id == '${params.productId}']{primaryImage{asset->{url}}}`;
    sanityClient.fetch(productQuery).then((productQueryRes) => {
      if (productQueryRes.length < 1) {
        navigate("../notfound", { replace: true });
      } else {
        sanityClient.fetch(messageQuery).then((messageQueryRes) => {
          setImageUrl(productQueryRes[0].primaryImage.asset.url);
          setMessage(messageQueryRes[0].aboutToOrder);
        });
      }
    })
  }, [])
  return (
    <Layout noFooter={true}>
      {<OrderView imageUrl={imageUrl} message={message} />}
    </Layout>
  )
}
