import React, { useState } from 'react'
import {
  MoreProducts,
  Home,
  NotFound,
  Order,
  ProductDetail
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainContext } from './contexts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainContext>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          />
          <Route
            path="/categories/:categoryName"
            element={<MoreProducts />}
          />
          <Route
            path="/order/:productId"
            element={<Order />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </MainContext>
  )
}

export default App
