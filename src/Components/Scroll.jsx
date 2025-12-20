// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant", // smooth vendaam
      });
    }, 100); // 👈 small delay (key)

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
