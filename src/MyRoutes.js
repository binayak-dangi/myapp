import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='productdetails/:product_id' element={<ProductDetails/>}/>
            <Route path='products' element={<Product/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
