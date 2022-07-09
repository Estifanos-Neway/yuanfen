import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Category, Layout } from "../components";
import { More } from "../components";
import { useContextProvider } from "../context"

export default function Categories() {
  const { products } = useContextProvider();
  const [pageContent, setPageContent] = useState("loading")
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const category = `${params.categoryName[0].toUpperCase()}${params.categoryName.substring(1)}`;
    if (Object.keys(products).length > 0 && !(category in products)) {
      navigate("../notfound", { replace: true });
    } else if (category in products) {
      // @ts-ignore
      setPageContent(<More categoryName={category} productList={products[category]} />);
    }
  }, [Object.keys(products).length]);
  return (
    <Layout>
      {pageContent}
    </Layout>
  )
}
