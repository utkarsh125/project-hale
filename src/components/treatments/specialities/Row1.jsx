import React from "react";
import {
  oncology,
  heart,
  rheum,
  mental,
  plastic,
  rare,
  surrogacy,
  infertility,
  endoc,
  cardio,
} from "../../../assets";

const Row1 = () => {
  return (
    <div className="mx-auto font-bold font-outfit flex justify-center p-5">
      <div className="mx-auto justify-center w-full flex flex-row">
        <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center items-center flex-col">
          <img className="w-[60px] h-[60px]" src={oncology} alt="" />
          <h5 className="pt-2">Oncology</h5>
        </div>

        <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center items-center flex-col">
          <img className="w-[60px] h-[60px]" src={endoc} alt="" />
          <h5 className="pt-2">Endocrinology</h5>
        </div>

        <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center items-center flex-col">
          <img className="w-[60px] h-[60px]" src={infertility} alt="" />
          <h5 className="pt-2">Infertility</h5>
        </div>

        <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center items-center flex-col">
          <img className="w-[60px] h-[60px]" src={mental} alt="" />
          <h5 className="pt-2">Mental Health</h5>
        </div>

        <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center items-center flex-col">
          <img className="w-[60px] h-[60px]" src={cardio} alt="" />
          <h5 className="pt-2">Cardiology</h5>
        </div>



        
      </div>
      <div></div>
    </div>
  );
};

export default Row1;
