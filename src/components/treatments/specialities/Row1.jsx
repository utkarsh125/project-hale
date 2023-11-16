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
    <div>
      <div className="flex flex-row justify-center">

        {/* Oncology */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={oncology} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="text-xl font-outfit font-bold">Oncology</p>
          </div>
        </div>

        {/* Endocrinology */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={endoc} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="font-outfit font-bold">Endocrinology</p>
          </div>
        </div>

        {/* Infertility */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={infertility} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="font-outfit font-bold">Infertility</p>
          </div>
        </div>

        {/* Mental Health */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={mental} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="font-outfit font-bold">Mental Health</p>
          </div>
        </div>

        {/* Cardiology */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={cardio} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="font-outfit font-bold">Cardiology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;
