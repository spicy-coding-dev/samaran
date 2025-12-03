import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "/samaranLogo.webp";

function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About us", href: "#about" },
        { label: "Product", href: "#product" },
        { label: "Contact us", href: "#contact" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#f9fbfd]" />,
      text: "nammasamarankulfi@gmail.com",
      href: "mailto:nammasamarankulfi@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-[#f9fbfd]" />,
      text: "+91 9629340194",
      href: "tel:+919629340194",
    },
    {
      icon: <Phone size={18} className="text-[#f9fbfd]" />,
      text: "+91 8489701768",
      href: "tel:+918489701768",
    },
    {
      icon: <MapPin size={45} className="text-[#f9fbfd]" />,
      text: "Samaran Food Industries, Ilayangudi, Sivaganga District Tamilnadu - 630702",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61576032731550",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/spicy_coding",
    },
  ];

  return (
    <footer className="bg-[#2F7F3D] text-white relative h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto p-10 relative z-40">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8 lg:gap-10 pb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-5">
            <img src={logo} alt="Spicy Code Logo" className="w-50 rounded-xl" />

            <p
              className="text-sm text-white leading-relaxed max-w-md"
              style={{ fontFamily: "inter" }}
            >
              Samaran is your trusted dairy company, proudly crafting fresh
              milk, pure paneer, and delightful kulfi with authentic taste and
              guaranteed quality.
            </p>
            <div className="flex gap-6 text-white z-50">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3ca2fa]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6 relative pb-2 group">
                {section.title}
                <span
                  className="absolute left-0 bottom-0 w-10 h-[3px] bg-linear-to-r from-[#3ca2fa] to-[#00d4ff] rounded-full 
    group-hover:w-20 transition-all duration-500"
                ></span>
              </h4>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors text-white"
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          const sec = document.querySelector(link.href);
                          sec?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 relative pb-2 group">
              Contact Us
              <span
                className="absolute left-0 bottom-0 w-10 h-[3px] bg-linear-to-r from-[#3ca2fa] to-[#00d4ff] rounded-full 
    group-hover:w-20 transition-all duration-500"
              ></span>
            </h4>

            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors text-white"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-center w-full h-10 rounded-xl bg-white items-center text-sm space-y-4 md:space-y-0">
          <p className="text-black" style={{ fontFamily: "inter" }}>
            &copy; {new Date().getFullYear()} Samaran. All rights reserved.
          </p>
        </div>
        <a href="https://spicycodez.netlify.app/" target="_black" >
          <p className="text-center mt-4 text-md" style={{fontFamily:"inter"}}>Developed By SpicycodeZ ❤️</p>
        </a>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
