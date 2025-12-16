import React from "react";
import { motion } from "framer-motion";
import kulfi from "../assets/product_img/productKulfi.webp";
import paneer from "../assets/product_img/productPanner.webp";
import ownerImg from "../assets/owner_img.webp";
import ParticlesBg from "../Components/ParticlesBackground";
import { Helmet } from "react-helmet";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeUpText = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About us - Samaran Foods | Trusted Dairy Brand </title>

        <meta
          name="description"
          content="Samaran Foods offers 100% pure and fresh dairy products including kulfi, paneer. Made with traditional taste and modern hygiene to ensure real quality in every bite."
        />

        <meta
          name="keywords"
          content="dairy products, kulfi, paneer, ghee, curd, milk products, samaran foods.samaran panner,samaran kulfi,samaran,best milk company,ilayangudi"
        />
        {/* Language */}
        <meta http-equiv="Content-Language" content="en, ta" />

        <meta
          property="og:title"
          content="About us - Samaran Foods | Trusted Dairy Brand"
        />
        <meta
          property="og:description"
          content="100% pure and fresh dairy products made with real taste and trusted quality."
        />
        <meta property="og:url" content="https://samaranfoods.com/about" />
        <meta
          property="og:image"
          content="https://samaranfoods.com/samaranLogo.png"
        />
        <meta
          property="og:image"
          content="https://www.samaranfoods.com/samaranLogo.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Samaran Foods" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Samaran Pure Dairy | Fresh Milk Products"
        />
        <meta
          name="twitter:description"
          content="100% pure and fresh dairy products made with real taste and trusted quality."
        />
        <meta
          name="twitter:image"
          content="https://samaranfoods.com/samaranLogo.png"
        />
        <meta name="twitter:url" content="https://samaranfoods.com/about" />
        <meta name="twitter:site" content="@NKulfi4677" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://www.schema.org",
            "@type": "AboutPage",
            "name": "About Samaran Foods",
            "url": "https://samaranfoods.com/about",
            "description": "About Samaran Foods dairy brand and its commitment to quality",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Samaran Foods",
              "url": "https://samaranfoods.com"
            },
            "about": {
              "@type": "Organization",
              "name": "Samaran Foods"
            }
          }
          `}
        </script>
         {/* canonical Tag */}
        <link rel="canonical" href="https://www.samaranfoods.com/about"/>
      </Helmet>
      <div
        className="relative px-6 md:px-12 lg:px-32 py-24  
      text-white"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesBg />
        </div>
        {/* -------------------------------------------------- INTRO SECTION -------------------------------------------------- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          {/* LEFT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg leading-relaxed flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-6"> எங்களைப் பற்றி</h2>

            <p className="opacity-90">
              <strong>Samaran Foods</strong> என்பது தமிழ்நாட்டின்
              இளையான்குடியில் அமைந்துள்ள ஒரு முன்னணி{" "}
              <strong>பால் பொருள் தயாரிப்பு நிறுவனம்</strong>. பாரம்பரிய
              சுவையும், நவீன சுகாதார தொழில்நுட்பங்களும் இணைந்த உயர்தர{" "}
              <strong>பால், பன்னீர், குல்பி</strong> போன்ற பால் சார்ந்த
              பொருட்களை வாடிக்கையாளர்களுக்கு வழங்குவதே எங்களின் முக்கிய
              நோக்கமாகும்.
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
              title="Samaran Owner"
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
          className="max-w-4xl mx-auto text-center mt-10 relative"
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
          className="max-w-5xl mx-auto mt-20 relative"
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
                alt="kulfi image"
                title="samaran kulfi"
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
                alt="Panner Image"
                title="Samaran Panner Image"
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
          className="max-w-6xl mx-auto mt-20 text-center relative"
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
          className="max-w-5xl mx-auto text-center mt-20 relative"
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
          className="max-w-5xl mx-auto text-center mt-20 relative"
        >
          <h3 className="text-3xl font-bold mb-4">எங்கள் பார்வை</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            சுத்தமான பால் பொருள் பிராண்டுகளில் தமிழகத்தில் முன்னணி நிலையை
            அடைதல்.
          </p>
        </motion.div>

        {/* -------------------------------------------------- VALUES -------------------------------------------------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto text-center mt-20 relative"
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
    </div>
  );
}
