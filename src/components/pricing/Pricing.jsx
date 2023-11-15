import React from "react";
import GlobalLite from "./priceCards/GlobalLite";
import GlobalFamily from "./priceCards/GlobalFamily";

const Pricing = () => {
  return (
    <section className="bg-[#1E232F] pt-[8rem] pb-[8rem] mt-[2rem] bg-">
      <div className="flex flex-col w-[100%] justify-center">
        <h2 className="flex justify-center font-domine text-bold text-4xl text-[#FFF]">
          Global Plans
        </h2>
        <p className="pt-5 text-xl flex justify-center font-outfit text-[#FFFFFF]">
          World’s Best Healthcare, Now Accessible and Affordable with
          MediPocket Global Membership Plan
        </p>
      </div>

      <div className="flex flex-row w-[100%] justify-center mt-[6rem]">
        <GlobalLite />
        <GlobalFamily />
      </div>
    </section>
  );
};

export default Pricing;
