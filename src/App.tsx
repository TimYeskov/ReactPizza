import React, { useState } from "react";
import { Route, Routes } from "react-router";

import Home from "./Pages/Home";
import Delivery from "./Pages/Delivery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Payment from "./Pages/Payment";
import Support from "./Pages/Support";
import FoodBlock from "./Pages/FoodBlock";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import History from "./Pages/History";
import CompletedOrder from "./Components/CompletedOrder";
import { Login } from "./Components/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
const App = () => {
  const login = useSelector((state: RootState) => state.cartSlice.login);

  return (
    <>
      {login && <Login />}
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/FoodBlock/:id" element={<FoodBlock />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/History" element={<History />} />
          <Route path="/CompletedOrder" element={<CompletedOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
