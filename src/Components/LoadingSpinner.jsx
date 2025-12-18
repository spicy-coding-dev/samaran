import React from "react";
import logo from "/samaranLogo.webp"; // ✅ correct path podu

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white " role="status"
  aria-label="Loading">
      {/* Spinner */}
      <div className="relative md:w-90 md:h-90 h-60 w-60">
        {/* Rotating Border */}
       <div
          className="absolute inset-0 rounded-full 
          border-4 border-green-600 
          border-t-transparent border-b-transparent 
          animate-spin will-change-transform"
        ></div>

        {/* Logo inside */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Samaran Logo"
            className="md:w-80 md:h-80 h-50 w-50 object-contain "
          />
        </div>
      </div>
    </div>
  );
}
