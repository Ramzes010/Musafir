import React from "react";
import Image from "next/image";

const MadeInGarage = () => {
  return (
    <div className="relative bottom-[1.4vw] left-[55vw] h-[3vw] w-[3vw] z-50">
      <div className="relative group h-full w-full">
        {/* Логотип */}
        <div className="absolute inset-0">
          <Image 
            src="/img/icons/Garage.svg"
            alt="Garage Logo"
            width={100}
            height={100}
            className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          />
        </div>

        {/* Стеклянный тултип слева */}
        <div className={`
          absolute right-full top-1/2 transform translate-y-[-50%] mr-2
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          pointer-events-none w-max max-w-[90vw]
        `}>
          <div className={`
            px-3 py-2 rounded-lg
            text-white font-medium text-[0.9vw]
            shadow-xl
            bg-glass border border-white/20
            backdrop-blur-md
          `}>
            Made in Garage
          </div>
          
          {/* Треугольный указатель (теперь справа) */}
          <div className={``} />
        </div>
      </div>

      <style jsx>{`
        .bg-glass {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        .border-l-glass {
          border-left-color: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
};

export default MadeInGarage;