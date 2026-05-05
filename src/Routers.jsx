import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Whoweare from "./components/pages/Whoweare/Whoweare";
import Services from "./components/pages/Services/Services";
import TechnologyInfrastructure from "./components/pages/TechnologyInfrastructure/TechnologyInfrastructure";
import Brands from "./components/pages/Brands/Brands";
import Network from "./components/pages/Network/Network";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/technology-infrastructure"
          element={<TechnologyInfrastructure />}
        />
        <Route path="/brands" element={<Brands />} />
        <Route path="/network" element={<Network />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
