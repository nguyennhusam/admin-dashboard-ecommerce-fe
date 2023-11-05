import React from "react";
import Sidebar from "./../Components/Sidebar";
import Header from "./../Components/Header";
import AddProductMain from "./../Components/Products/AddProductMain";

const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddProductMain />
      </main>
    </>
  );
};

export default AddProduct;
