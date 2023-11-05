import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";
import Main from "./components/Main/Main";
import WriterProduct from "./components/Product/WriterProduct";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/profile";
import EditProfile from "./components/Profile/EditProfile";
import UploadProduct from "./components/Product/UploadProduct";
import EditProduct from "./components/Product/EditProduct";
import SignUp from "./components/SignUp/SignUp";
// import axios from "axios";

function App() {
  // const token =
  //   "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0NjMzMDc4NzEzOC0yMm0zODhwZHI0c3NyZWhzY2Fha3NnMW5iZnIzcW4wMy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjQ2MzMwNzg3MTM4LTIybTM4OHBkcjRzc3JlaHNjYWFrc2cxbmJmcjNxbjAzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEwMzQ4OTQzNjA5MDM4NjU1MjE2IiwiaGQiOiJkZ3N3LmhzLmtyIiwiZW1haWwiOiJkYzQ2NTNAZGdzdy5ocy5rciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE2OTc1NDA1MjMsIm5hbWUiOiLtlZnsg53quYDrj5nssKwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSXpNMUtDREtJelhXd2l2SkY1dVV2SUJKTGpXNmItajc4WGtJUkpSY0JLPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Iuq5gOuPmeywrCIsImZhbWlseV9uYW1lIjoi7ZWZ7IOdIiwibG9jYWxlIjoia28iLCJpYXQiOjE2OTc1NDA4MjMsImV4cCI6MTY5NzU0NDQyMywianRpIjoiNjUxMGE3NzIxMjY0MzQxZTYwYWRmODg4MDcwZGMxOWIxNmRlMzQxNSJ9.JBYfCr5AaGgyYfX3cA0CWVdopeqS_y1kCJ7AirYnnp3D-KqRFYLb6PRWR8wRW5ZqW9s2OfC-y3mgMdAP8Hz8tgmMnHQL_wDEt0qrUMIzaTMnBEWx-CpLyiNuB5-LJt-PCdPMrRxkRbU4lj6AX1AC49qdOVwwwKB9m9arLt9f4IXVeWbTtS4ehOFFcGVmx2bUfNKRe_EbFzxEM_prKQD6kFFkjTwd_v4eN53YeHVZxtZI9YRqgByc0vb6BLb3RZFbatD5Tnt1qpMcppE0ZDRS4yScKVpdpHE540nFCbcYlYY2vQ8a2TQOyraXMOosDSVr55J0Pby4igOcyzThdVCAAQ";

  // axios.post("http://172.20.10.13:8080/auth/login/google", {
  //   headers: {
  //     id_token: `${token}`,
  //   },
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/writer' element={<WriterProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit' element={<EditProfile />} />
        <Route path='/product/upload' element={<UploadProduct />} />
        <Route path='product/edit' element={<EditProduct />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
