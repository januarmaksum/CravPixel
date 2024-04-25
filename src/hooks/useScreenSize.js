import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Ensure window is defined
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      // Set initial size immediately
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return screenSize;
};

export default useScreenSize;
