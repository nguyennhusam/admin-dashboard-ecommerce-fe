import React from "react";
import Sidebar from "./../Components/Sidebar";
import Header from "./../Components/Header";
import OrderDetailmain from "../Components/Orders/OrderDetailmain";

const OrderDetailPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailmain />
      </main>
    </>
  );
};

export default OrderDetailPage;
