import React from "react";
import whatsapp from "../assets/whatsappLogo.png";


const WhatsappButton = ({
  phone = "919626605461", // 👈 your number
  message = "Vanakkam! I would like to know more about your services.",
  position = "bottom-right",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phone}?text=${encodedMessage}`;

  const positionClass = {
    "bottom-right": "bottom-8 right-5",
    "bottom-left": "bottom-5 left-5",
    "top-right": "top-5 right-5",
    "top-left": "top-5 left-5",
  }[position];
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed ${positionClass} z-50`}
    >
      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 rounded-full blur-xl bg-[#25D366] opacity-60 animate-pulse"></div>

      {/* Actual Button */}
      <div className="bg-white rounded-full w-14 h-14 flex justify-center items-center  hover:scale-110 transition-all duration-400">
        <div
          className="
    flex md:h-12 md:w-12 h-11 w-11 items-center justify-center 
    rounded-full bg-[#25D366]
  "
        >
          <img src={whatsapp} alt="WhatsApp Logo" className="h-8 w-8" />
        </div>
      </div>
    </a>
  );
};

export default WhatsappButton;
