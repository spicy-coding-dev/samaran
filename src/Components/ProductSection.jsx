import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rating,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import grassImg from "../assets/grass.webp"; // update your path
import productSectionBg from "../assets/productSectionBg.webp";
// import cow from "../assets/cow.png";
import kulfiImg from "../assets/product_img/productKulfi.webp";
import pannerImg from "../assets/product_img/productPanner.webp";
import ClientReviewBox from "./ClientReview";

const products = [
  {
    id: 1,
    title: "Samaran Kulfi",
    img: kulfiImg,
    description:
      "Samaran குல்ஃபி என்பது உண்மையான பசும்பாலில் இருந்து தயாரிக்கப்படும் பாரம்பரிய குல்ஃபி ஐஸ்கிரீம். அனுபவிக்கும் ஒவ்வொரு சுவைப்பிலும் மென்மையான தணிவு மற்றும் இயற்கையான பால் மணம் உணரலாம்.",
    fullDetails: `
🔸**முக்கிய தன்மைகள்**
          ➢ 100% பசும்பாலில் தயாரிப்பு
          ➢ எந்த ரசாயனமும் / கேமிக்கலும் இல்லை
          ➢ மிருதுவான, நெக்குநெக்கு சுவை
          ➢ குழந்தைகள் முதல் பெரியவர்கள் வரை அனைவருக்கும் பிடிக்கும்
          ➢ சரியான குளிர்பதனத்தில் பாதுகாப்பாக தயாரிக்கப்படுகிறது

🔸**கிடைக்கும் அளவுகள்**
          ➢ ஸ்டிக் குல்ஃபி
          ➢ மண்பானை (Pot) குல்ஃபி

🔸**சிறப்பு அம்சங்கள்**
          ➢ விருந்துகள், விழாக்கள், சிறப்பு நிகழ்வுகளுக்கு perfect
          ➢ Pure Milk + Natural Ingredients combo

    `,
  },
  {
    id: 2,
    title: "Samaran Panner",
    img: pannerImg,
    description:
      "Samaran பனீர் என்பது மென்மையான அமைப்பு கொண்ட, உயர்தரமான பனீர். உண்மையான பால் மணம் மற்றும் இயற்கையான சுவை அதன் சிறப்பு. சத்தான புரதம் நிறைந்ததால் தினசரி உணவுக்கு சிறந்த தேர்வு.",
    fullDetails: `
🔸**முக்கிய தன்மைகள்**
          ➢ 100% தூய்மையான பசும்பாலில் தயாரிப்பு
          ➢ Soft & Fresh texture
          ➢ Cooking-friendly — grill, fry, curry எல்லாவற்றுக்கும் perfect
          ➢ Preservative இன்றிய இயற்கையான தரம்
          ➢ தினசரி புரதத்துக்கான சிறந்த தேர்வு

🔸**பயன்படுத்த ஏற்றது**
          ➢ Paneer Butter Masala
          ➢ Paneer Tikka
          ➢ Fried Paneer
          ➢ Homemade Curries
          ➢ Sandwich / Wrap fillings

🔸**கிடைக்கும் அளவுகள்**
          ➢ 100g
          ➢ 200g
          ➢ 500g

🔸**சிறப்பு அம்சங்கள்**
          ➢ Perfect softness
          ➢ High protein value

    `,
  },
];

const ProductSection = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (item) => {
    setSelected(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <>
      <ClientReviewBox />
      {/* PRODUCT SECTION */}
      <section
        className="w-full py-10 min-h-[90vh] relative  bg-cover bg-center bg-no-repeat px-6"
        style={{
          backgroundImage: `url(${productSectionBg})`,
          backgroundAttachment:"fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        {/* <motion.img
          src={grassImg}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          alt="grass"
          className="absolute md:-bottom-50 -bottom-12 left-0 w-full h-auto z-0 opacity-80"
        /> */}
        <div className="relative">
          <h2
            className="text-center text-4xl font-bold text-white mb-14"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Our Products
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
            {products.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  rotateX: 10,
                  rotateY: -10,
                  scale: 1.03,
                }}
                className="relative bg-white/60 rounded-3xl p-5 shadow-2xl 
               transform-gpu perspective-1000 backdrop-blur-md overflow-visible"
              >
                {/* Floating Circle on top */}

                {/* BEST SALE Floating Badge */}
                <motion.div
                  className="w-20 h-20 bg-yellow-400 text-black font-bold text-[12px] 
               flex items-center justify-center rounded-full
               absolute -top-5 left-5 -translate-x-1/2 z-50 uppercase shadow-[0_0_15px_3px_rgba(255,255,0,0.6)]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ fontFamily: "Oswald" }}
                >
                  BEST
                  <br />
                  SALE
                </motion.div>

                <motion.img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-72 object-cover rounded-xl mb-5"
                />

                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: "inter" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Poppins " }}
                >
                  {item.description}
                </p>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 1,
                    backgroundColor: "#166534",
                    borderRadius: "12px",
                    paddingY: "10px",
                    "&:hover": { backgroundColor: "#14532d" },
                  }}
                  onClick={() => handleOpen(item)}
                  style={{ fontFamily: "Oswald", fontWeight: "400" }}
                >
                  More Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL POPUP */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", fontSize: "24px" }}>
          {selected?.title}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 20, top: 15 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <img
            src={selected?.img}
            alt="product"
            className="w-full h-80 object-contain rounded-xl mb-5"
          />

         <div
  className="text-gray-800 text-[16px] leading-relaxed"
  style={{ lineHeight: "1.7", whiteSpace: "pre-wrap" }}
  dangerouslySetInnerHTML={{
    __html: selected?.fullDetails
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")  // Bold headings
  }}
></div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductSection;
