import React, { useState } from "react";
import { motion } from "framer-motion";
import {Helmet} from "react-helmet"
import homeSectionBgDes from "../assets/homeSectionBgDes.webp";
import homeSectionBgMob from "../assets/homeSetionBgMob.webp";
import { Link } from "react-router-dom";

const HomeSection = () => {

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
      <div
        className="min-h-screen md:min-h-[80vh] lg:min-h-[95vh] relative text-white"
        id="homeSection"
       
      >
        {/* <!-- LCP IMAGE - DISCOVERABLE + HIGH PRIORITY --> */}
        <img
          src={homeSectionBgDes}
          alt="Samaran Product"
          fetchPriority="high" // ✅ Correct for React
          decoding="async"
          title="Samaran Product"
          property="image"
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
        />

        <img
          src={homeSectionBgMob}
          alt="Samaran Product"
          fetchPriority="high" // ✅ Correct for React
          decoding="async"
          title="Samaran CProduct"
          property="image"
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
              className="text-5xl  sm:text-6xl lg:text-7xl font-serif leading-tight mt-13 mb-3"
              style={{
                fontFamily: "Berkshire Swash",
                textShadow: "3px 3px 8px rgba(0,0,0,0.6)",
              }}
            >
              Samaran Pure Dairy. <br />
              Real Taste.
              <br /> <span className="block">Fresh & Trusted Products</span>
            </h1>

            <h2
              className="max-w-lg text-md opacity-90 mb-6"
              style={{ fontFamily: "Poppins" }}
            >
              Freshly crafted kulfi, paneer, and other milk products made with
              100% pure milk by Samaran.
              <br /> Bringing traditional dairy goodness with modern hygiene and
              consistency.
            </h2>

            <div className="flex gap-4 flex-wrap">
              <Link to = "/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{fontFamily:"Oswald",letterSpacing:"1px"}}
                  className="bg-white text-green-700 px-6 py-3 rounded-full font-medium shadow cursor-pointer"
                >
                  View Products
                </motion.button>
              </Link>
              {/* // inside your JSX */}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{fontFamily:"Oswald",letterSpacing:"1px"}}
                  className="border border-white/60 px-6 py-3 rounded-full font-medium cursor-pointer"
                >
                  Enquire Now
                </motion.button>
              </Link>
            </div>
          </motion.section>

          <aside className="relative flex flex-col items-center md:items-end mb-50">
            <motion.blockquote
              className="text-xl sm:text-2xl font-serif  text-right  max-w-xs relative -bottom-58 lg:left-30 left-0 lg:bottom-1 md:max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                fontFamily: "Catamaran",
                textShadow: "3px 3px 8px rgba(0,0,0,0.6)",
              }}
            >
              “ஆரோக்கியமான உணவு <br /> ஆரோக்கியமான வாழ்க்கை.”
            </motion.blockquote>
          </aside>
        </main>
      </div>
  );
};

export default HomeSection;
