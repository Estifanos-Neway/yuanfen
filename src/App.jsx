import { useState } from 'react'
import './App.css'
import {
  Categories,
  Home,
  NotFound,
  Order,
  Products
} from "./pages";

import { Routes, Route } from "react-router-dom";
import { ContextProvider } from './context';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:productId"
            element={<Products />}
          />
          <Route
            path="/categories/:categoryName"
            element={<Categories />}
          />
          <Route
            path="/order/:productId"
            element={<Order />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ContextProvider>
  )
}

export default App
