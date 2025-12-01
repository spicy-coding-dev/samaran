import React, { useState } from "react";
import { motion } from "framer-motion";
import kulfi from "../assets/kulfi_about.jpg";
import yellowKulfi from "../assets/yellow-kulfi-about.jpg";
import GlareHover from "../Ui/HoverEffect";
import wave from "../assets/milkWaves.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-white py-10 relative overflow-hidden">
      <img
        src={wave}
        className="w-auto lg:scale-[1.1] scale-[1.5] absolute h-30 md:h-auto -top-5 md:-top-10 z-0 "
      />
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <div className="hidden md:grid grid-cols-2 gap-10 items-center ">
          {/* ===========================
            DESKTOP MODEL (md and up)
        ============================ */}
          {/* LEFT IMAGES */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 120 }} // bottom la irunthu
            whileInView={{ opacity: 1, y: 0 }} // mela move aagum
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {/* Big Circle */}
            <motion.div
              className="lg:w-50 lg:h-100 md:w-30 md:h-60 bg-[#f2f2f2] rounded-full overflow-hidden relative z-10 lg:top-28 md:top-20 md:left-20 shadow-xl"
              initial={{ scale: 0.5, opacity: 0, y: 100 }} // tiny + bottom
              animate={{ scale: 1, opacity: 1, y: 0 }} // big + center
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img src={kulfi} className="w-full h-full object-cover" loading="lazy"/>
            </motion.div>

            {/* Small Circle */}
            <motion.div
              className="lg:w-60 lg:h-120 md:w-40 md:h-80 bg-[#f2f2f2] rounded-full overflow-hidden absolute lg:left-0 lg:top-0  md:right-30 md:top-10 shadow-lg"
              initial={{ scale: 0.5, opacity: 0, y: 100 }} // tiny + bottom
              animate={{ scale: 1, opacity: 1, y: 0 }} // big + center
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img src={yellowKulfi} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>

            {/* Label top */}

            {/* Label top */}
            <motion.div
              className="absolute top-25 left-90 z-10 w-20  h-20 flex justify-center items-center text-center  text-white bg-green-700 font-bold px-4 py-2 rounded-full shadow-md text-sm"
              // initial={{ opacity: 0, y: -20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              // transition={{ delay: 0.5, duration: 0.6 }}
              // viewport={{ once: true }}
              style={{ fontFamily: "Oswald", fontWeight: "500" }}
            >
              100% Pure Milk
            </motion.div>

            {/* Label bottom */}
            <motion.div
              className="absolute lg:-bottom-20 lg:right-110 bg-green-700 text-center text-white font-bold px-4 py-3 rounded-full shadow-md text-xs"
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.6, duration: 0.6 }}
              // viewport={{ once: true }}
              style={{ fontFamily: "Oswald", fontWeight: "500" }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Hygienic & Safe Production
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h2
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "Berkshire Swash" }}
              >
                About Us
              </h2>
              <div
                className="h-1 w-20 rounded-md"
                style={{
                  background: "linear-gradient(90deg, #22c55e, #84cc16)", // green gradient
                }}
              ></div>
            </div>
               <p
            className="text-gray-700 leading-relaxed mb-4"
            style={{ fontFamily: "Poppins",fontWeight:"500" }}
          >
            Samaran என்பது தூய்மையும் தரமும் கொண்ட பால் சார்ந்த உணவுப் பொருட்களை
            தயாரிக்கும் நம்பிக்கைக்குரிய நிறுவனம். எங்கள் தயாரிப்புகளில்
            உண்மையான சுவை, இயற்கையான சுத்தம் மற்றும் பாரம்பரிய தரம்
            பிரதிபலிக்கிறது.
          </p>

            <p
              className="text-gray-700 leading-relaxed mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Samaran is a trusted dairy brand dedicated to delivering fresh,
              pure, and high-quality milk products. From traditional kulfi to
              soft paneer, we bring authentic taste made with 100% pure milk.
            </p>
                <Link to="/about">
            <motion.button
              className="bg-green-700 text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-800 transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "Oswald" }}
            >
              
                Learn More <span aria-hidden="true">→</span>
              
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* ===========================
            MOBILE MODEL (below md)
        ============================ */}
      <div className="block relative md:hidden text-center ">
        {/* Mobile Big Image */}
        <motion.div
          className="w-54 h-54 mx-5 relative rounded-3xl overflow-hidden shadow-xl mb-6"
          initial={{ opacity: 0, scale: 0.7, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={kulfi} className="w-full h-full object-cover" loading="lazy" />
        </motion.div>

        {/* Mobile small image */}
        <motion.div
          className="w-44 h-44 mx-auto absolute top-20 right-5 rounded-3xl overflow-hidden shadow-lg mb-4"
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={yellowKulfi} className="w-full h-full object-cover" loading="lazy" />
        </motion.div>

        {/* Mobile Label */}
        <motion.p
          className="bg-green-700 text-center inline-block px-4 py-2 rounded-full text-white font-bold text-sm shadow-md mt-10 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontFamily: "Oswald", fontWeight: "500" }}
        >
          100% Pure Milk • Hygienic Production
        </motion.p>

        {/* Mobile Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{once:"true"}}
          className="px-5"
        >
          <div className="flex flex-col justify-center items-center">
        <h2
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            About Us
          </h2>
           <div
                className="h-1 w-30 rounded-md mb-4"
                style={{
                  background: "linear-gradient(90deg, #22c55e, #84cc16)", // green gradient
                }}
              ></div>
          </div>
          
          <p
            className="text-gray-700 leading-relaxed mb-4"
            style={{ fontFamily: "Poppins", fontWeight: "400" }}
          >
            Samaran என்பது தூய்மையும் தரமும் கொண்ட பால் சார்ந்த உணவுப் பொருட்களை
            தயாரிக்கும் நம்பிக்கைக்குரிய நிறுவனம். எங்கள் தயாரிப்புகளில்
            உண்மையான சுவை, இயற்கையான சுத்தம் மற்றும் பாரம்பரிய தரம்
            பிரதிபலிக்கிறது.
          </p>

          <p
            className="text-gray-700 leading-relaxed mb-4"
            style={{ fontFamily: "Poppins", fontWeight: "400" }}
          >
            Samaran is a trusted dairy brand dedicated to delivering fresh,
            pure, and high-quality milk products. From traditional kulfi to soft
            paneer, we bring authentic taste made with 100% pure milk.
          </p>
 <Link to="/about">
            <motion.button
              className="bg-green-700 text-white px-6 py-3 mb-10 rounded-md shadow-lg hover:bg-green-800 transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "Oswald" }}
            >
              
                Learn More <span aria-hidden="true">→</span>
              
            </motion.button>
            </Link>
        </motion.div>
      </div>
       <img
        src={wave}
        className="w-auto lg:scale-[1.1] scale-[1.5] absolute h-20 md:h-auto -bottom-5 md:-bottom-10 z-0  rotate-180"
      />
    </section>
  );
};

export default AboutSection;
