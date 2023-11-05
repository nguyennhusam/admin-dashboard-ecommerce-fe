import React from "react";
import Sidebar from "./../Components/Sidebar";
import Header from "./../Components/Header";
import MainProducts from "../Components/Products/MainProducts"

const ProductPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts />
      </main>
    </>
  );
};

export default ProductPage;
