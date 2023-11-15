import React from "react";
import "./body.css";
import BodyCard from "./cards/BodyCard";

const Body = () => {
  return (
    <div className="hale__body flex flex-row m-10 pt-[8rem]">
      <div className="justify-center">
      <div className="hale__body-container flex flex-row sm:flex-col ml-[8rem] mr-[8rem]">
        <h1 className="flex flex-center align-center text-5xl p-6 m-4 font-bold w-[50%]">
          Experience Exceptional <br className="sm:block hidden"/> HealthCare In India <br className="sm:block hidden"/> With Hale
        </h1>
        <p className="flex text-normal p-6 w-[50%] text-[#757575]">
          Discover the pinnacle of healthcare services in India,
          where advancements, quality, cutting edge research, expert doctors and
          a commitment to patient success, combine to provide an unparalleled
          medical tourism experience. Hale is your dedicated partner,
          guiding you towards improved health and wellness. Connect with us
          today and embark on a journey of exceptional healthcare services.
        </p>
      </div>

      <div className="flex flex-row md:flex-col sm:flex-col m-10 pt-[8rem] justify-center">
        <div className="p-6 m-4">
          <BodyCard />
        </div>
        <div className="p-6">
          <BodyCard />
        </div>
        <div className="p-6">
          <BodyCard />
        </div>
      </div>
      </div>

    </div>
  );
};

export default Body;
