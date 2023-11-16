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
} from "../../../assets";

const Row1 = () => {
  return (
    <div className="ml-[6rem] mr-[6rem] rounded-lg bg-gray-200 font-bold font-outfit flex justify-center p-5">
      <div className="ml-[1.5rem] mr-[1.5rem] justify-center flex flex-row">
        <div className="flex justify-center flex-col">
          <img className="ml-[10px]" src={oncology} alt="" />
          <h5 className="pt-[1rem]">Oncology</h5>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Row1;
