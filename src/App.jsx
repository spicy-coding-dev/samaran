
import "./index.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/Scroll";
import WhatsappButton from "./Components/WhatsappButton";
import FooterSection from "./Components/FooterSection";

import { Suspense, lazy } from "react";

import LoadingSpinner from "./Components/LoadingSpinner";


// Lazy Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PageNotFound = lazy(() => import("./pages/404Page"));

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <WhatsappButton position="bottom-right" />
      <FooterSection />
    </Router>
  );
}
