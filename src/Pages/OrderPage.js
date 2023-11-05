import React from "react";
import Sidebar from "./../Components/Sidebar";
import Header from "./../Components/Header";
import OrderMain from "../Components/Orders/OrderMain";

const OrderPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderMain />
      </main>
    </>
  );
};

export default OrderPage;
