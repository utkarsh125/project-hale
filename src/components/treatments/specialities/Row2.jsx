import React from 'react'
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

const Row2 = () => {
  return (
    <div className="mx-auto font-bold font-outfit flex justify-center p-5 pt-0">
    <div className="mx-auto justify-center flex flex-row">
      <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center flex-col">
        <img className="ml-[10px]" src={oncology} alt="" />
        <h5 className="pt-[1rem]">Oncology</h5>
      </div>

      <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center flex-col">
        <img className="ml-[10px]" src={oncology} alt="" />
        <h5 className="pt-[1rem]">Oncology</h5>
      </div>

      <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center flex-col">
        <img className="ml-[10px]" src={oncology} alt="" />
        <h5 className="pt-[1rem]">Oncology</h5>
      </div>

      <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center flex-col">
        <img className="ml-[10px]" src={oncology} alt="" />
        <h5 className="pt-[1rem]">Oncology</h5>
      </div>

      <div className="flex bg-gray-200 mx-3 p-5 rounded-lg justify-center flex-col">
        <img className="ml-[10px]" src={oncology} alt="" />
        <h5 className="pt-[1rem]">Oncology</h5>
      </div>



      
    </div>
    <div></div>
  </div>
  )
}

export default Row2