import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sanityClient from "../configs/sanity-client.js";
import { Layout, Loading, OrderView, Retry } from "../components";
import { aboutToOrder } from "../commons/strings.js";
const messageQuery = "*[_type == 'other']{aboutToOrder}"

export default function Order() {
  const params = useParams();
  const navigate = useNavigate();
  const [pageContent, setPageContent] = useState(<Loading />)
  useEffect(() => {
    try {
      const productQuery = `*[_id == '${params.productId}']{category->, primaryImage{asset->{url}}, productId}`;
      sanityClient.fetch(productQuery).then((productQueryRes) => {
        if (productQueryRes.length < 1) {
          navigate("../notfound", { replace: true });
        } else {
          sanityClient.fetch(messageQuery).then((messageQueryRes) => {
            setPageContent(<OrderView imageUrl={productQueryRes[0].primaryImage.asset.url} message={aboutToOrder} productId={productQueryRes[0].productId} />)
          });
        }
      })
    } catch (error) {
      console.error("error");
      console.dir(error, { depth: null });
      setPageContent(<Retry />);
    }
  }, [])
  return (
    <Layout noFooterOrder={true}>
      {pageContent}
    </Layout>
  )
}
