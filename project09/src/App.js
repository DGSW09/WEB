import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/Browser/SignUp/SignUp";
import MoreInfoSignUp from "./components/Browser/SignUp/MoreInfoSignUp";
import Login from "./components/Browser/Login/Login";
import Main from "./components/Browser/Main/Main";
import Search from "./components/Browser/Search/Search";
import Product from "./components/Browser/Product/Product";
import WriterProduct from "./components/Browser/WriterProduct/WriterProduct";
import ProductData from "./components/Browser/Profile/ProductData";
import EditProfile from "./components/Browser/EditProfile/EditProfile";
import UploadProduct from "./components/Browser/UploadProduct/UploadProduct";
import EditProduct from "./components/Browser/EditProduct/EditProduct";
import JoinPeoplePage from "./components/Browser/JoinPeoplePage/Join'PeoplePage";
import { BrowserView, MobileView } from "react-device-detect";
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
    <>
      <BrowserView>
        <BrowserRouter>
          <Routes>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="signUp/moreInfo" element={<MoreInfoSignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/writer" element={<WriterProduct />} />
            <Route path="/profile" element={<ProductData />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/product/upload" element={<UploadProduct />} />
            <Route path="product/edit" element={<EditProduct />} />
            <Route path="/product/join" element={<JoinPeoplePage />} />
          </Routes>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </MobileView>
    </>
  );
}

export default App;
