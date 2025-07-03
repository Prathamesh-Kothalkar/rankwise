"use client";
import { useEffect } from "react";

const SocialBar: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl27070923.profitableratecpm.com/e2/38/a4/e238a4c4ba34dfeb572a088579232d26.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default SocialBar;
