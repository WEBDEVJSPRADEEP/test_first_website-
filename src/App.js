import React from "react";
import Home from "./Component/Home";
import Product from "./Component/Product";
import Contact from "./Component/Contact";
import Cart from "./Component/Cart";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./Component/SingleProduct";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
