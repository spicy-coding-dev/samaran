import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "/samaranLogo.webp";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
// import { Helmet } from "react-helmet";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Contact Us", path: "/contact" },
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
    <>
      <div className="fixed w-full z-50 top-0 left-0">
        <nav
          className={
            "flex justify-between items-center h-20 px-6 md:px-12 transition-all duration-300 bg-green/90 shadow-lg backdrop-blur-3xl"
          }
        >
          {/* Logo */}
          <a href="https://samaranfoods.com">
            <motion.img
              className="h-12 w-auto rounded-xl cursor-pointer"
              variants={itemVariants}
              initial="hidden"
              src={logo}
              alt="samaran logo"
              animate="visible"
              custom={0}
            ></motion.img>
          </a>

          {/* Desktop Links */}
          <motion.ul
            className="hidden lg:flex gap-6 items-center bg-white text-black rounded-full px-8 py-4 shadow-lg "
            initial="hidden"
            animate="visible"
          >
            {links.map((link, i) => (
              <motion.li
                key={link.name}
                variants={itemVariants}
                custom={i + 1}
                style={{ fontFamily: "inter" }}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-full font-inter font-semibold transition-all duration-300 cursor-pointer
    ${
      location.pathname === link.path
        ? "bg-green-700 text-white shadow-lg backdrop-blur-3xl"
        : "hover:bg-green-700 hover:text-white text-black"
    }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Get Started Button */}
          <motion.div
            className="hidden lg:flex gap-4 items-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={links.length + 1}
          >
            <button
              className="p-2 rounded-full border border-gray-300 bg-white  cursor-pointer hover:bg-[#2f8240] transition-colors duration-300"
              aria-label="User Account"
            >
              <User className="text-[#2f8240] hover:text-white cursor-pointer" />
            </button>
            <button
              className="p-2 rounded-full border border-gray-300 bg-white hover:bg-[#2f8240] transition-colors duration-300"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="text-[#2f8240] hover:text-white cursor-pointer" />
            </button>
          </motion.div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden text-white">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"} // <-- accessibility fix
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="lg:hidden bg-white backdrop-blur-sm flex flex-col items-center py-6 space-y-4 text-green-700 font-medium"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              style={{ fontFamily: "inter" }}
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-lg transition-colors duration-300 
    ${
      location.pathname === link.path
        ? "text-green-600 font-bold"
        : "text-green-700 hover:text-orange-500"
    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        {/* Hidden SEO links for Google */}
        <div style={{ display: "none" }}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/product">Products</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
