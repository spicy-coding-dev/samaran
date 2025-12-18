import React from "react";
import logo from "/samaranLogo.webp"; // ✅ correct path podu

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Spinner */}
      <div className="relative md:w-55 md:h-55 h-40 w-40">
        {/* Rotating Border */}
       <div
          className="absolute inset-0 rounded-full 
          border-4 border-green-600 
          border-t-transparent border-b-transparent 
          animate-spin"
        ></div>

        {/* Logo inside */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Samaran Logo"
            className="md:w-50 md:h-50 h-30 w-30 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
