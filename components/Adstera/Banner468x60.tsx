import { useEffect } from "react";

const Banner468x60: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key': '091e147a829141481c6f2bdb77c2b4fe',
        'format': 'iframe',
        'height': 60,
        'width': 468,
        'params': {}
      };
    `;
    const script2 = document.createElement("script");
    script2.src = "//www.highperformanceformat.com/091e147a829141481c6f2bdb77c2b4fe/invoke.js";
    script2.async = true;

    const container = document.getElementById("ad-468x60");
    if (container) {
      container.appendChild(script1);
      container.appendChild(script2);
    }
  }, []);

  return <div id="ad-468x60" style={{ width: 468, height: 60 }} />;
};

export default Banner468x60;
