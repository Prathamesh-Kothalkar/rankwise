"use client";
import { useEffect } from "react";

const NativeBanner: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl27071103.profitableratecpm.com/8d212ead60d71e36f9680ad22cf2b7a3/invoke.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="container-8d212ead60d71e36f9680ad22cf2b7a3"></div>;
};

export default NativeBanner;
