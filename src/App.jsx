import React from 'react'
import {
  MoreProducts,
  Home,
  NotFound,
  Order,
  ProductDetail
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainContext } from './contexts';

import "react-alice-carousel/lib/alice-carousel.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import Test from './pages/test';

function App() {
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
          <Route
            path="/test"
            element={<Test />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </MainContext>
  )
}

export default App
