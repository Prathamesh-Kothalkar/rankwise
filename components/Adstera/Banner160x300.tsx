"use client";
import { useEffect } from "react";

const Banner160x300: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key': 'a2f8ddc65ff4405d29afc551cc039901',
        'format': 'iframe',
        'height': 300,
        'width': 160,
        'params': {}
      };
    `;
    const script2 = document.createElement("script");
    script2.src = "//www.highperformanceformat.com/a2f8ddc65ff4405d29afc551cc039901/invoke.js";
    script2.async = true;

    const container = document.getElementById("ad-160x300");
    if (container) {
      container.appendChild(script1);
      container.appendChild(script2);
    }
  }, []);

  return <div id="ad-160x300" style={{ width: 160, height: 300 }} />;
};

export default Banner160x300;
