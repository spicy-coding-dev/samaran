import React from "react";

import AboutSection from "../Components/AboutSection";
import ProductSection from "../Components/ProductSection";
import ContactSection from "../Components/ContactSection";
import { Helmet } from "react-helmet";
import HomeSection from "../Components/HomeSection";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Title */}
        <title>Home – Samaran Pure Dairy | Real Taste, Fresh & Trusted Products</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Samaran Pure Dairy offers fresh kulfi, paneer, and pure milk products made with 100% hygienic processes. Trusted dairy brand in Tamil Nadu delivering real taste and quality."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Samaran Dairy, Pure Dairy Products, Fresh Kulfi, Paneer Manufacturer, Milk Products Tamil Nadu, Traditional Kulfi, Hygienic Dairy Foods"
        />

        {/* Language */}
        <meta httpEquiv="Content-Language" content="en, ta" />

        {/* Open Graph (Social Media Preview) */}
        <meta
          property="og:title"
          content="Samaran Pure Dairy – Real Taste, Fresh & Trusted Products"
        />
        <meta
          property="og:description"
          content="Freshly crafted kulfi, paneer & milk products made with 100% pure milk. Samaran brings traditional dairy goodness with modern hygiene."
        />
        <meta
          property="og:image"
          content="https://samaranfoods.com/samaranLogo.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samaranfoods.com/" />
        <meta property="og:site_name" content="Samaran Pure Dairy" />
        <meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Samaran Pure Dairy | Fresh Milk Products"
        />
        <meta
          name="twitter:description"
          content="Pure dairy products including kulfi and paneer made from 100% fresh milk by Samaran."
        />
        <meta
          name="twitter:image"
          content="https://samaranfoods.com/samaranLogo.webp"
        />
        <meta name="twitter:url" content="https://samaranfoods.com" />
        <meta name="twitter:site" content="@NKulfi4677" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Home",
            "url": "https://samaranfoods.com/",
            "description": "Fresh dairy products from Samaran Dairy",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Samaran Foods",
              "url": "https://samaranfoods.com"
            }
          }
          `}
        </script>
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* canonical Tag */}
        <link rel="canonical" href="https://samaranfoods.com"/>
      </Helmet>
      <HomeSection/>
      <AboutSection />
      <ProductSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
