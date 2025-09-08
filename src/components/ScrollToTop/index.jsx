import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollOnTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

export default ScrollOnTop;
