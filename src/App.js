import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './responsive.css'
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import OrderPage from "./Pages/OrderPage";
import NotFound from "./Pages/NotFound";
import CategoriesPage from "./Pages/CategoriesPage";
import OrderDetailPage from "./Pages/OrderDetailPage";
import AddProduct from "./Pages/AddProduct";
import UsersPage from "./Pages/UsersPage";
import ProductEditPage from "./Pages/ProductEditPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/category" element={<CategoriesPage />} />
        <Route path="/orders" element={<OrderPage/>} />
        <Route path="/order" element={<OrderDetailPage/>} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/product/:id/edit" element={<ProductEditPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
