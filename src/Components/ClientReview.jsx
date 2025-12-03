import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  { text: "Samaran kulfi taste super! Pure milk flavour 🔥", author: "Praveen" },
  { text: "Paneer very soft & fresh. Worth buying!", author: "Meena" },
  { text: "Best kulfi in our area. Kids love it ❤️", author: "Ravi Kumar" },
  { text: "Quality excellent. Delivery also fast!", author: "Sathish" },
  { text: "Taste perfect. Natural ingredients feel 😍", author: "Keerthana" },
];

export default function ReviewGlassFloat() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = reviews[index];

  return (
   <div className="fixed bottom-6 left-6 hidden md:block z-50">
  <motion.div
    key={index}
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white w-64 p-5 rounded-lg shadow-lg border-l-5 border-green-500"
  >
    <h3 className="font-bold text-gray-900" style={{fontFamily:"inter"}}>Customer Review</h3>
    <p className="text-gray-700 text-sm mt-2" style={{fontFamily:"inter",fontWeight:"400"}}>"{current.text}"</p>
    <p className="text-gray-500 text-xs mt-2">– {current.author}</p>
  </motion.div>
</div>


  );
}
