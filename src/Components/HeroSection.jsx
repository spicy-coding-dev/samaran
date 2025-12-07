import React, { useState } from "react";
import { motion } from "framer-motion";

import homeSectionBgDes from "../assets/homeSectionBgDes.webp";
import homeSectionBgMob from "../assets/homeSetionBgMob.webp"

const HeroSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const float = {
    hidden: { y: 0 },
    show: {
      y: [0, -10, 0], // up and down animation
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };



  return (
    <>
      {/* <Helmet>
  <title>Samaran Foods – Home | Pure Dairy Products & Fresh Milk Items</title>

  <meta
    name="description"
    content="Samaran Foods offers 100% pure and fresh dairy products including kulfi, paneer, curd, and ghee. Made with traditional taste and modern hygiene to ensure real quality in every bite."
  />

  <meta
    name="keywords"
    content="dairy products, kulfi, paneer, ghee, curd, milk products, samaran foods.samaran panner,samaran kulfi,samaran,best milk company,ilayangudi"
  />

  <meta property="og:title" content="Samaran Foods – Pure Dairy Products" />
  <meta
    property="og:description"
    content="100% pure and fresh dairy products made with real taste and trusted quality."
  />
  <meta property="og:image" content="/samaranLogo.webp" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Samaran Foods" />
</Helmet> */}

      <div
        className="min-h-screen md:min-h-[80vh] lg:min-h-[95vh] relative text-white mt-10"
        id="homeSection"
        // style={{ backgroundImage: `url(${homeSectionBg})`}}
      >
          {/* <!-- LCP IMAGE - DISCOVERABLE + HIGH PRIORITY --> */}
  <img 
    src={homeSectionBgDes}
    alt="Pure Dairy. Real Taste. Trusted Quality"
    fetchPriority="high"   // ✅ Correct for React
    decoding="async"
    className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
  />

 <img 
    src={homeSectionBgMob}
    alt="Pure Dairy. Real Taste. Trusted Quality"
    fetchPriority="high"   // ✅ Correct for React
    decoding="async"
    className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
  />
        <div
          className="absolute  inset-0 bg-black/30 will-change-opacity"
          aria-hidden="true"
        ></div>

        <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
          <motion.section
            className="text-left md:pl-4"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h1
              className="text-5xl  sm:text-6xl lg:text-7xl font-serif leading-tight md:mt-10 mt-15 mb-6"
              style={{
                fontFamily: "Berkshire Swash",
                textShadow: "3px 3px 8px rgba(0,0,0,0.6)",
              }}
            >
              Pure Dairy.
              <br /> Real Taste.
              <br /> Trusted Quality.
            </h1>

            <p
              className="max-w-lg text-md opacity-90 mb-6"
              style={{ fontFamily: "Poppins" }}
            >
              Freshly crafted kulfi, paneer, and other milk products made with
              100% pure milk by Samaran.
              <br /> Bringing traditional dairy goodness with modern hygiene and
              consistency.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="#product">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 px-6 py-3 rounded-full font-medium shadow cursor-pointer"
                >
                  View Products
                </motion.button>
              </a>
              {/* // inside your JSX */}
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/60 px-6 py-3 rounded-full font-medium cursor-pointer"
                >
                  Enquire Now
                </motion.button>
              </a>
            </div>
          </motion.section>

          <aside className="relative flex flex-col items-center md:items-end mb-50">
          
            <motion.blockquote
              className="text-xl sm:text-2xl font-serif mr-20 text-right  max-w-xs relative -bottom-50 lg:bottom-1 md:max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{fontFamily:"monospace"}}
            >
              “ஆரோக்கியமான உணவு <br /> ஆரோக்கியமான வாழ்க்கை.”
            </motion.blockquote>
          </aside>
        </main>
      </div>
    </>
  );
};

export default HeroSection;
