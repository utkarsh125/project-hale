import React from "react";
import {
  rheum,
  plastic,
  rare,
  surrogacy,
  neurology,
} from "../../../assets";

const Row2 = () => {
  return (
    <div>
      <div className="flex flex-row justify-center">

        {/* Oncology */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={neurology} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="text-xl font-outfit font-bold">Neurology</p>
          </div>
        </div>

        {/* Endocrinology */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={rheum} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="font-outfit font-bold">Rheumatology</p>
          </div>
        </div>

        {/* Infertility */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={plastic} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="font-outfit font-bold">Plastic Surgery</p>
          </div>
        </div>

        {/* Mental Health */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={rare} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="font-outfit font-bold">Rare Diseases</p>
          </div>
        </div>

        {/* Cardiology */}
        <div className="flex mx-3 my-3 bg-gray-200 rounded-[20px] w-[220px] h-[218px] items-center justify-center">
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src={surrogacy} alt="" className="w-[60px] h-[60px]"/>
            </div>
            <p className="font-outfit font-bold">Surrogacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row2;
