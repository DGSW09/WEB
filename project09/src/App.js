import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/product/Product";
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
