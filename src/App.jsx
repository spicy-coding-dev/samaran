import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/Scroll";
import WhatsappButton from "./Components/WhatsappButton";
import HomePage from "./pages/HomePage";
import FooterSection from "./Components/FooterSection";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsappButton position="bottom-right" />
      <FooterSection />
    </Router>
  );
}
