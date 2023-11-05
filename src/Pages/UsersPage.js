import React from "react";
import Sidebar from "./../Components/Sidebar";
import Header from "./../Components/Header";
import UserComponent from "../Components/Users/UserComponent";

const UsersPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <UserComponent />
      </main>
    </>
  );
};

export default UsersPage;
