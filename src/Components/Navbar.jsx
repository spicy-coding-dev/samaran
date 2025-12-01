import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/samaranLogo.jpg";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

   const navigate = useNavigate();
  const location = useLocation();

  // Smooth navigation handler
  const handleNavigation = (href) => {
    // If NOT on homepage → navigate to home first
    if (location.pathname !== "/") {
      navigate("/");

      // Wait homepage load → scroll
      setTimeout(() => {
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);

    } else {
      // Already in homepage → scroll directly
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Contact Us", href: "#contact" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="fixed w-full z-50 top-0 left-0">
      <nav
        className={`flex justify-between items-center h-20 px-6 md:px-12 transition-all duration-300 ${
          scrolled ? "bg-green/90 shadow-lg backdrop-blur-3xl" : "bg-[#2f8240]"
        }`}
      >
        {/* Logo */}
        <motion.img
          className="h-12 w-auto rounded-xl cursor-pointer"
          variants={itemVariants}
          initial="hidden"
          src={logo}
          animate="visible"
          custom={0}
        ></motion.img>

        {/* Desktop Links */}
        <motion.ul
          className="hidden md:flex gap-6 items-center bg-white text-black rounded-full px-6 py-2 shadow-lg "
          initial="hidden"
          animate="visible"
        >
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              className="px-4 py-2 rounded-full font-inter hover:bg-green-700 hover:text-white font-semibold transition-bg duration-300 cursor-pointer"
              variants={itemVariants}
              custom={i + 1}
              onClick={()=>handleNavigation(link.href)}
              style={{ fontFamily: "inter" }}
            >
              {link.name}

              {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span> */}
            </motion.li>
          ))}
        </motion.ul>

        {/* Get Started Button */}
        <motion.div
          className="hidden md:flex gap-4 items-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={links.length + 1}
        >
          <button className="p-2 rounded-full border border-gray-300 bg-white hover:bg-[#2f8240] transition-colors duration-300">
            <a
            >
              <User className="text-[#2f8240] hover:text-white cursor-pointer" />
            </a>
          </button>
          <button className="p-2 rounded-full border border-gray-300 bg-white hover:bg-[#2f8240] transition-colors duration-300">
            <a
            >
              <ShoppingCart className="text-[#2f8240] hover:text-white cursor-pointer" />
            </a>
          </button>
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          className="md:hidden bg-black/95 backdrop-blur-sm flex flex-col items-center py-6 space-y-4 text-white font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <a
                href={link.href}
                className="hover:text-orange-500 transition-colors duration-300"
                onClick={handleNavigation(link.href)}
              >
                {link.name}
              </a>
            </motion.li>
          ))}

          <motion.button
            className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600 transition-colors duration-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Get Started
            </a>
          </motion.button>
        </motion.ul>
      )}
    </div>
  );
};

export default NavBar;
