import React from "react";
import { doc1, doc2, doc3, doc4 } from "../../assets";

const Doctors = () => {
  return (
    // <div className="bg-gray-100 flex justify-center items-center flex-col mt-[4rem] pt-[8rem] pb-[8rem]">
    //   <div className="justify-center mb-[2rem]">
    //     <h2 className="text-4xl font-bold font-domine mb-[2rem] text-[#28574E]">
    //       World's Top Doctors
    //     </h2>
    //   </div>

    //   <div className="flex flex-row">
    //     {/* DOCTOR 1 */}
    //     <div className="flex flex-row justify-center mx-5 items-center">
    //       <img src={doc1} alt="" className="rounded-[17px]" />
    //       <p className="absolute bg-gray-200 font-outfit bg-opacity-70 p-4 mt-72 rounded-[20px]">Dr. Wage Warrior</p>
    //     </div>

    //     {/* DOCTOR 2 */}
    //     <div className="flex flex-row justify-center mx-5 items-center">
    //       <img src={doc2} alt="" className="rounded-[17px]" />
    //       <p className="absolute bg-gray-200 font-outfit bg-opacity-70 p-4 mt-72 rounded-[20px]">Dr. Black Slave</p>
    //     </div>

    //     {/* DOCTOR 3 */}
    //     <div className="flex flex-row justify-center mx-5 items-center">
    //       <img src={doc3} alt="" className="rounded-[17px]" />
    //       <p className="absolute bg-gray-200 font-outfit bg-opacity-70 p-4 mt-72 rounded-[20px]">Dr. Anita Ambani</p>
    //     </div>

    //     {/* DOCTOR 4  */}
    //     <div className="flex flex-row justify-center mx-5 items-center">
    //       <img src={doc4} alt="" className="rounded-[17px]" />
    //       <p className="absolute bg-gray-200 font-outfit bg-opacity-70 p-4 mt-72 rounded-[20px]">Dr. Autistic Austin</p>
    //     </div>
    //   </div>
    // </div>

    <div  className="bg-gray-100 flex flex-col justify-center lg:flex-row mx-auto pt-20 items-center">
      <div className="flex flex-col justify-center">
        <h1 className="flex justify-center font-semibold font-domine text-3xl text-[#28574E]">World's Top Doctors</h1>
        <div className='flex flex-col lg:flex-row justify-center px-3 py-5 items-center flex-2'>
          {/* DOCTOR 1 */}
          <div className="flex flex-col justify-center mx-5 ml-0 mt-10 items-center z-[1]">
            <img src={doc1} alt="" className="relative rounded-[20px] z-[2]"/>
            <span className="absolute z-[3] mt-72 font-outfit text-xl p-5 opacity-75 bg-gray-100 rounded-full mx-auto my-">Dr. Vikas Dev</span>
          </div>

          {/* DOCTOR 1 */}
          <div className="flex flex-col justify-center mx-5 ml-0 mt-10 items-center z-[1]">
            <img src={doc2} alt="" className="relative rounded-[20px] z-[2]"/>
            <span className="absolute z-[3] mt-72 font-outfit text-xl p-5 opacity-75 bg-gray-100 rounded-full mx-auto my-">Dr. Rohit Singh</span>
          </div>

          {/* DOCTOR 1 */}
          <div className="flex flex-col justify-center mx-5 ml-0 mt-10 items-center z-[1]">
            <img src={doc3} alt="" className="relative rounded-[20px] z-[2]"/>
            <span className="absolute z-[3] mt-72 font-outfit text-xl p-5 opacity-75 bg-gray-100 rounded-full mx-auto my-">Dr. Anita Aggarwal</span>
          </div>

          {/* DOCTOR 1 */}
          <div className="flex flex-col justify-center mx-5 ml-0 mt-10 items-center z-[1]">
            <img src={doc4} alt="" className="relative rounded-[20px] z-[2]"/>
            <span className="absolute z-[3] mt-72 font-outfit text-xl p-5 opacity-75 bg-gray-100 rounded-full mx-auto my-">Dr. Shivam Singh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
