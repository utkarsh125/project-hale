import "./body.css";
import BodyCard from "./cards/BodyCard";

const Body = () => {
  return (
    <div className="hale__body flex flex-col lg:flex-row my-8 pt-24">
      <div>
      <div className="hale__body-container w-5/6 flex flex-col lg:flex-row mx-auto lg:mx-32">
        <h1 className="flex text-5xl py-4 mx-auto font-bold w-2/3">
          Experience Exceptional <br className="sm:block hidden"/> HealthCare In India <br className="sm:block hidden"/> With Hale
        </h1>
        <p className="flex mx-auto text-xl lg:text-lg lg:text-normal py-3 w-2/3 text-[#757575]">
          Discover the pinnacle of healthcare services in India,
          where advancements, quality, cutting edge research, expert doctors and
          a commitment to patient success, combine to provide an unparalleled
          medical tourism experience. Hale is your dedicated partner,
          guiding you towards improved health and wellness. Connect with us
          today and embark on a journey of exceptional healthcare services.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row my-5 pt-32 justify-center">
        <div className="p-6 m-4">
          <BodyCard />
        </div>
        <div className="p-6 m-4">
          <BodyCard />
        </div>
        <div className="p-6 m-4">
          <BodyCard />
        </div>
      </div>
      </div>

    </div>
  );
};

export default Body;
