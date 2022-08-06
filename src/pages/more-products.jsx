import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FullScreenLoading, Layout, Retry } from "../components";
import { MoreProductsView } from "../page-views";
import { useMainContext } from "../contexts"

export default function MoreProducts() {
  const { products } = useMainContext();
  const params = useParams();
  const navigate = useNavigate();
  const [pageContent, setPageContent] = useState(<FullScreenLoading />);
  useEffect(() => {
    try {
      const category = params.categoryName ?? "";
      if (Object.keys(products).length > 0 && !(category in products)) {
        navigate("../notfound", { replace: true });
      } else if (category in products) {
        setPageContent(<MoreProductsView categoryName={category} productList={products[category]} />);
      }
    } catch (error) {
      console.error("error");
      console.dir(error, { depth: null });
      setPageContent(<Retry />);
    }

  }, [Object.keys(products).length]);
  return (
    <Layout>
      {pageContent}
    </Layout>
  )
}
