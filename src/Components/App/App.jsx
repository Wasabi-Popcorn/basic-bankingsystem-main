import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Customers from "../Customers/Customers";
import Navbar from "../Navbar/Navbar";

function App() {

  return (
    <div className="app container-md">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/*" element={<Navigate replace to="/Home" />} />
      </Routes>
    </div>
  );
}

export default App;
