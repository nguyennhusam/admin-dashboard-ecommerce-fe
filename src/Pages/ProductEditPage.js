import React from "react";
import Sidebar from "./../Components/Sidebar";
import Header from "./../Components/Header";
import EditProductMain from "../Components/Products/EditProductMain"
import products from "./../data/Products";
import { useParams } from "react-router-dom";

const ProductEditPage = () => {
  const {id} = useParams()
  const productId = products.find((p) => p._id === id);
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};
export default ProductEditPage;
