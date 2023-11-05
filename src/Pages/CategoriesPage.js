import React from "react";
import Sidebar from "./../Components/Sidebar";
import Header from "./../Components/Header";
import MainCategories from "./../Components/Categories/MainCategories";

const CategoriesPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainCategories />
      </main>
    </>
  );
};

export default CategoriesPage;
