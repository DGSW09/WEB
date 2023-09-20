import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Product from "./components/product/Product";
import Product from "./components/Product/Product";
import Main from "./components/Main/Main";
import WriterProduct from "./components/Product/writerProduct";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import User from "./components/User/User";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/writer" element={<WriterProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="user" element={<User />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
