import React from "react";
import { motion } from "framer-motion";
import kulfi from "../assets/product_img/kulfi.png";
import paneer from "../assets/product_img/panner.png";
import ownerImg from "../assets/owner_img.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeUpText = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  },
};


export default function AboutFullSection() {
  return (
    <div
      className="relative px-6 md:px-12 lg:px-32 py-24  
      text-white bg-linear-to-b from-[#2f8240] via-[#3b9c4e] to-[#2f8240]"
    >
      {/* -------------------------------------------------- INTRO SECTION -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative  z-10">
        {/* LEFT TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg leading-relaxed flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-6">எங்கள் பற்றி</h2>

          <p className="opacity-90">
            Samaran என்பது தூய்மையும் தரமும் கொண்ட பால் சார்ந்த உணவுப் பொருட்களை
            தயாரிக்கும் நம்பிக்கைக்குரிய நிறுவனம். எங்கள் தயாரிப்புகளில்
            உண்மையான சுவை, இயற்கையான சுத்தம் மற்றும் பாரம்பரிய தரம்
            பிரதிபலிக்கிறது.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {/* Glow Back Circle */}
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full -z-10"></div>

          <motion.img
            whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            src={ownerImg}
            className="w-auto lg:h-[600px] object-contain rounded-3xl shadow-2xl border-4 border-white/20"
            alt="Samaran Owner"
          />
        </motion.div>
        
      </div>

      {/* -------------------------------------------------- JOURNEY -------------------------------------------------- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center mt-10"
      >
        <h3 className="text-3xl font-bold mb-4">எங்கள் பயணம்</h3>

        <p className="text-lg leading-relaxed opacity-90">
          சிறிய அளவில் தொடங்கப்பட்ட Samaran இன்று வாடிக்கையாளர்களின்
          நம்பிக்கையால் முன்னணி பால் பொருள் தயாரிப்பு நிறுவனமாக வளர்ந்து
          வருகிறது. தமிழகத்தின் பல பகுதிகளுக்கு எங்கள் தயாரிப்புகள்
          விநியோகிக்கப்படுகின்றன.
        </p>
      </motion.div>

      {/* -------------------------------------------------- PRODUCTS -------------------------------------------------- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto mt-20"
      >
        <h3 className="text-3xl font-bold text-center mb-10">
          எங்கள் தயாரிப்புகள்
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Kulfi */}
          <div className="text-center space-y-4">
            <img
              src={kulfi}
              className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
              alt="Kulfi"
            />
            <h4 className="text-2xl font-semibold">Samaran குல்ஃபி</h4>
            <p className="opacity-90">
              இயற்கையான பால் மற்றும் சுத்தமான பொருட்களால் தயாரிக்கப்பட்டது.
            </p>
          </div>

          {/* Paneer */}
          <div className="text-center space-y-4">
            <img
              src={paneer}
              className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
              alt="Paneer"
            />
            <h4 className="text-2xl font-semibold">Samaran பனீர்</h4>
            <p className="opacity-90">மென்மையும் சுவையும் நிறைந்த பனீர்.</p>
          </div>
        </div>
      </motion.div>

      {/* -------------------------------------------------- WHY CHOOSE US -------------------------------------------------- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto mt-20 text-center"
      >
        <h3 className="text-3xl font-bold mb-8">
          எங்களைத் தேர்வு செய்ய வேண்டிய காரணங்கள்
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "100% சுத்தமான பால் பொருட்கள்",
            "தரநிலை உள்ள உற்பத்தி நடைமுறை",
            "அனுபவமுள்ள குழுவினர்",
            "நேர்மையான சேவை",
            "சுவை + தரம் உறுதி",
          ].map((item, index) => (
            <motion.div
              whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 
              p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-lg"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* -------------------------------------------------- MISSION -------------------------------------------------- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center mt-20"
      >
        <h3 className="text-3xl font-bold mb-4">எங்கள் நோக்கம்</h3>
        <p className="text-lg opacity-90 leading-relaxed">
          உண்மை சுவை, உயர்ந்த தரம், நம்பிக்கையுடன் கூடிய பால் தயாரிப்புகள்
          வாடிக்கையாளர்களுக்கு வழங்குவது.
        </p>
      </motion.div>

      {/* -------------------------------------------------- VISION -------------------------------------------------- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center mt-20"
      >
        <h3 className="text-3xl font-bold mb-4">எங்கள் பார்வை</h3>
        <p className="text-lg opacity-90 leading-relaxed">
          சுத்தமான பால் பொருள் பிராண்டுகளில் தமிழகத்தில் முன்னணி நிலையை அடைதல்.
        </p>
      </motion.div>

      {/* -------------------------------------------------- VALUES -------------------------------------------------- */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto text-center mt-20"
      >
        <h3 className="text-3xl font-bold mb-8">எங்கள் மதிப்புகள்</h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-lg">
          {[
            "தரம்",
            "நம்பிக்கை",
            "சுத்தம்",
            "புதுமை",
            "வாடிக்கையாளர் திருப்தி",
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/10 backdrop-blur-md 
                border border-white/20 shadow-md text-white"
            >
              {value}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
