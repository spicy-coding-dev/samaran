import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";

import AboutSection from "./Components/AboutSection";

import ProductSection from "./Components/ProductSection";
import ContactUs from "./Components/ContactSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutFullSection from "./Components/AboutFullSection";
import ScrollToTop from "./Components/Scroll";
import WhatsappButton from "./Components/WhatsappButton";
import Footer from "./Components/FooterSection";
import HeroSection from "./Components/HeroSection";


export default function App() {

  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* SINGLE PAGE WEBSITE CONTENT */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <HeroSection />
              </section>
              <section id="about">
                <AboutSection/>
              </section>
              <section id="product">
                <ProductSection />
              </section>
              <section id="contact">
                <ContactUs />
              </section>
              <WhatsappButton position="bottom-right" />
              <Footer />
            </>
          }
        />

        {/* FULL ABOUT PAGE */}
        <Route path="/about" element={<AboutFullSection />} />
      </Routes>
    </Router>
  );
}
