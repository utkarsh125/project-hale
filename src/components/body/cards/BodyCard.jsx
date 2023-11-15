import React from "react";

const BodyCard = () => {
  return (
    <div className="block rounded-lg bg-[#F9F9F9] p-6">
      {/*NEED TO ADD IMAGE  */}
      <h4 className="flex text-2xl font-bold justify-left font-heading p-2.5 color">
        Second Opinion
      </h4>
      <p className="text-normal p-2.5">
        When facing a serious, life-changing illness, we understand the critical
        importance of obtaining expert advices
      </p>

      <div className="mt-[2rem] flex flex-center justify-center">
        <button
          type="button"
          className="text-slate-100 text-xl justify-center p-4 bg-[#28574E] rounded-full flex flex-center"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BodyCard;
