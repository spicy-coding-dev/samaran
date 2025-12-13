import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import cowImg from "../assets/cow.webp";
import grassImg from "../assets/grass.webp";
import ContactForm from "./ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  return (
    <section className="w-full min-h-[90vh] bg-[#e9f5e9] relative py-10 ">
      <img
        src={grassImg}
        loading="lazy"
        alt="grass image"
        className="absolute md:-bottom-50 -bottom-15 left-0 w-full h-auto z-0"
      />

      <img
        src={cowImg}
        loading="lazy"
        alt="cow  image"
        className="absolute md:-left-5 md:bottom-50 -top-6 md:top-5 -left-7 w-48 md:w-64 lg:w-80 select-none"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-semibold text-black mt-15 md:mt-8"
          style={{ fontFamily: "Berkshire Swash" }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-gray-700 mb-8 mt-5 "
          style={{ fontFamily: "poppies" }}
        >
          Distributors & retailers are welcome. Minimum order details on
          request.
        </motion.p>

        {/* FORM START */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
