import React, { useRef, useEffect, useState } from "react";

const logos = [
  "/img/logo-1.svg",
  "/img/logo-2.svg",
  "/img/logo-3.svg",
  "/img/logo-4.svg",
  "/img/logo-5.svg",
  "/img/logo-6.svg",
];

export default function LogoSlider() {
  const [copies, setCopies] = useState(100); // Кол-во повторов логотипов
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateCopies = () => {
      const sliderWidth = sliderRef.current?.offsetWidth || 0;
      const screenWidth = window.innerWidth;
      const minCopies = Math.ceil(screenWidth / sliderWidth) + 1;
      setCopies(minCopies);
    };

    updateCopies();
    window.addEventListener("resize", updateCopies);
    return () => window.removeEventListener("resize", updateCopies);
  }, []);

  const repeatedLogos = Array(copies)
    .fill(logos)
    .flat();

  return (
    <div className="logo-slider-wrapper">
      <div className="logo-slider" ref={sliderRef}>
        {repeatedLogos.map((logo, index) => (
          <div className="logo-slide" key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
