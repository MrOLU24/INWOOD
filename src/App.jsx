import React from "react";
import Header from "./Components/header";
import Home from "./sections/Home";
import Shop from "./sections/Shop";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="pt-20">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
export default App;
