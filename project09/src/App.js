import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/product/Product";
import Main from "./components/Main/Main";
import WriterProduct from "./components/product/WriterProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/writer" element={<WriterProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
