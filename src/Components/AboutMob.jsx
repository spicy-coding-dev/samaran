import React from "react";
import { motion } from "framer-motion";
import kulfi from "../assets/kulfi_about.webp";
import yellowKulfi from "../assets/yellow-kulfi-about.webp";
import { Link } from "react-router-dom";

const AboutMob = () => {
  return (
    <div>
      <motion.div
        className="w-54 h-54 mx-5 relative rounded-3xl overflow-hidden shadow-xl mb-6"
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src={kulfi}
          className="w-full h-full object-cover"
          alt="kulfi"
          loading="lazy"
        />
      </motion.div>

      {/* Mobile small image */}
      <motion.div
        className="w-44 h-44 mx-auto absolute top-20 right-5 rounded-3xl overflow-hidden shadow-lg mb-4"
        initial={{ opacity: 0, scale: 0.7, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={yellowKulfi}
          className="w-full h-full object-cover"
          loading="lazy"
          alt="kulfi"
        />
      </motion.div>

      {/* Mobile Label */}
      <motion.p
        className="bg-green-700 text-center inline-block px-4 py-2 rounded-full text-white font-bold text-sm shadow-md mt-10 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
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
        viewport={{ once: "true" }}
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
          தயாரிக்கும் நம்பிக்கைக்குரிய நிறுவனம். எங்கள் தயாரிப்புகளில் உண்மையான
          சுவை, இயற்கையான சுத்தம் மற்றும் பாரம்பரிய தரம் பிரதிபலிக்கிறது.
        </p>

        <p
          className="text-gray-700 leading-relaxed mb-4"
          style={{ fontFamily: "Poppins", fontWeight: "400" }}
        >
          Samaran is a trusted dairy brand dedicated to delivering fresh, pure,
          and high-quality milk products. From traditional kulfi to soft paneer,
          we bring authentic taste made with 100% pure milk.
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
  );
};

export default AboutMob;
