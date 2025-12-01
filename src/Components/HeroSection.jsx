import React, { useState } from "react";
import { motion } from "framer-motion";
import homeProductImg from "../assets/homeProductImg.png";
import bgImg from "../assets/heroimgbg.png";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
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

  // Tilt Effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;

    setRotateY(((x - centerX) / centerX) * 30);
    setRotateX(((centerY - y) / centerY) * 30);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="min-h-screen bg-[#2f8240] text-white">
      <main className="max-w-6xl mx-auto px-6 py-10  grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <motion.section
          className="text-left md:pl-4"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-tight mt-10 mb-6"
            style={{ fontFamily: "Berkshire Swash" }}
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
            <Link 
            to="product"
                offset={-80} // adjust this value to match your header height

            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 px-6 py-3 rounded-full font-medium shadow cursor-pointer"
              >
                View Products
              </motion.button>
            </Link>
            {/* // inside your JSX */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
                offset={-80} // adjust this value to match your header height
              // className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/60 px-6 py-3 rounded-full font-medium cursor-pointer"
              >
                Enquire Now
              </motion.button>
            </Link>
          </div>
        </motion.section>

        <aside className="relative overflow-hidden flex flex-col items-center md:items-end">
          <motion.div
            className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mt-20"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {/* BACKGROUND IMAGE */}
            <motion.img
              src={bgImg}
              className="absolute md:top-5  md:-left-10 -top-10 left-0 md:w-full md:h-full object-cover scale-110 opacity-60 z-0"
              alt="bg"
              variants={float} // subtle floating
            />

            {/* MAIN FRONT IMAGE */}
            <img
              src={homeProductImg}
              alt="kulfi img"
              className="relative z-10 md:scale-[1.3] w-full"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s",
                transformStyle: "preserve-3d",
              }}
            />
          </motion.div>

          <motion.blockquote
            className="text-xl sm:text-2xl font-serif mr-20 text-right max-w-xs  md:max-w-md mt-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            “ஆரோக்கியமான உணவு <br /> ஆரோக்கியமான வாழ்க்கை.”
          </motion.blockquote>
        </aside>
      </main>
    </div>
  );
};

export default HeroSection;
