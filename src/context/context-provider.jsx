import { createContext, useState, useContext, useEffect } from 'react'
import sanityClient from "../configs/sanity-client.js";

// @ts-ignore
const Context = createContext();
const productsQuery = "*[_type == 'product']{_id, category->{name}, primaryImage{asset->{url}}, price}"
const socialsQuery = "*[_type == 'other']{instagram, facebook, telegram, email}"

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState({});
  const [socials, setSocial] = useState({});

  useEffect(() => {
    sanityClient.fetch(socialsQuery).then((socialsQueryRes) => {
      setSocial(socialsQueryRes[0]);
    })
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
  }, [])
  return (
    <Context.Provider value={{ products, setProducts, socials, setSocial }}>
      {children}
    </Context.Provider>
  )
}

export const useContextProvider = () => useContext(Context);
