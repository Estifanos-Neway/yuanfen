import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Category, Layout, Loading, Retry } from "../components";
import { More } from "../components";
import { useContextProvider } from "../context"

export default function Categories() {
  const { products } = useContextProvider();
  const params = useParams();
  const navigate = useNavigate();
  const [pageContent, setPageContent] = useState(<Loading />)
  useEffect(() => {
    try {
      const category = `${params.categoryName[0].toUpperCase()}${params.categoryName.substring(1)}`;
      if (Object.keys(products).length > 0 && !(category in products)) {
        navigate("../notfound", { replace: true });
      } else if (category in products) {
        // @ts-ignore
        setPageContent(<More categoryName={category} productList={products[category]} />);
      }
    } catch (error) {
      console.error("error");
            console.dir(error,{depth:null});
      setPageContent(<Retry />);
    }

  }, [Object.keys(products).length]);
  return (
    <Layout>
      {pageContent}
    </Layout>
  )
}
