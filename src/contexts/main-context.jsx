import React, { createContext, useState, useContext, useEffect } from "react"
import sanityClient from "../configs/sanity-client.js";

// @ts-ignore
const Context = createContext();
const productsQuery = "*[_type == 'product']{_id, category->{name}, primaryImage{asset->{url}}, price, productId}"
const socialsQuery = "*[_type == 'other']{instagram, facebook, telegram, email}"

export default function MainContext({ children }) {
  const [products, setProducts] = useState({});
  const [socials, setSocial] = useState({});

  useEffect(() => {
    try {
      sanityClient.fetch(socialsQuery).then((socialsQueryRes) => {
        setSocial(socialsQueryRes[0]);
      })
    } catch (error) {
      console.error("error");
      console.dir(error, { depth: null });
    }

    try {
      sanityClient.fetch(productsQuery).then(productsQueryRes => {
        const groupedProducts = {}
        productsQueryRes.forEach(product => {
          if (product.category.name in groupedProducts) {
            groupedProducts[product.category.name].push(product)
          } else {
            groupedProducts[product.category.name] = [product]
          }
        });
        setProducts(groupedProducts);
      })
    } catch (error) {
      console.error("error");
      console.dir(error, { depth: null });

    }
  }, [])
  return (
    <Context.Provider value={{ products, setProducts, socials, setSocial }}>
      {children}
    </Context.Provider>
  )
}

export const useMainContext = () => useContext(Context);
