import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";
import Main from "./components/Main/Main";
import WriterProduct from "./components/Product/WriterProduct";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/profile";
import SignUp from "./components/SignUp/SignUp";
import EditProfile from "./components/Profile/EditProfile";
import UploadProduct from "./components/Product/UploadProduct";
import EditProduct from "./components/Product/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/writer" element={<WriterProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/upload" element={<UploadProduct />} />
        <Route path="editProduct" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
