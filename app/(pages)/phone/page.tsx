import React from "react";
import Image from "next/image";
import phone1 from "../../img/phone1.png";

const Phome = () => {
  return (
    <div className="w-full py-10 md:py-20 px-4">
      <div className="max-w-[1350px] mx-auto bg-[#F7F7F7] rounded-[40px] flex justify-baseline md:flex-row items-center relative min-h-[200px] md:min-h-[420px] px-8 md:px-20 overflow-hidden md:overflow-visible">
        <div className="flex-1 z-10 py-12 md:py-0 text-center md:text-left">
          <p className="uppercase tracking-[0.25em] text-[12px] md:text-[14px] font-bold text-gray-900 mb-4">
            Galaxy sale is live now
          </p>

          <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
            Galaxy S24 | S24+
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-[450px] leading-relaxed mx-auto md:mx-0">
            Get up to $1,000 in trade-in credit from participating
            carriers.{" "}
          </p>
        </div>

        <div className="flex-1 relative w-full h-[350px] md:h-full max-[586px]:hidden">
          <div className="md:absolute md:top-1/2 md:-right-100 md:-translate-y-1/2 w-full md:w-[130%] lg:w-[145%]">
            <Image
              src={phone1}
              alt="Samsung Galaxy S24 Series"
              className=" h-auto object-contain drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.1)]"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phome;
