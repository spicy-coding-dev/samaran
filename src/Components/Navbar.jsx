import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    { name: "Products", path: "/products" },
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

  const preloadPage = (path) => {
    if (path === "/about") {
      import("../pages/AboutPage");
    }
    if (path === "/products") {
      import("../pages/ProductPage");
    }
    if (path === "/contact") {
      import("../pages/ContactPage");
    }
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
              className="h-12 w-30 rounded-xl cursor-pointer"
              variants={itemVariants}
              initial="hidden"
              src="/samaranLogo.webp"
              loading="eager"
              fetchpriority="high"
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
                  onMouseEnter={() => preloadPage(link.path)}
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
              className={`text-2xl p-2 ${
                location.pathname === "/products" ||
                location.pathname === "/contact"
                  ? "text-black"
                  : "text-white"
              } `}
              aria-label={menuOpen ? "Close menu" : "Open menu"} // <-- accessibility fix
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Soft overlay */}
              <motion.div
                className="fixed inset-0 bg-black/30 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Side-peek panel */}
              <motion.div
                className="fixed top-0 right-0 h-full w-[65%] max-w-sm bg-white z-50 shadow-2xl rounded-l-3xl p-6 flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 110, damping: 18 }}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-semibold text-green-800">Menu</h2>
                  <button onClick={() => setMenuOpen(false)}>
                    <X size={26} />
                  </button>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-5 text-green-900 font-semibold">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl transition ${
                          location.pathname === link.path
                            ? "bg-green-700 text-white"
                            : "hover:bg-green-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Bottom icons */}
               
              </motion.div>
            </>
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
