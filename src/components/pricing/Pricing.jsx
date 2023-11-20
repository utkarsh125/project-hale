import GlobalLite from "./priceCards/GlobalLite";
import GlobalFamily from "./priceCards/GlobalFamily";

const Pricing = () => {
  return (
    <section className="bg-[#1E232F] pt-[8rem] pb-[8rem] mt-[2rem]">
      <div className="flex justify-center p-5 pt-0 flex-col">
        <h2 className="flex justify-center font-domine text-bold text-4xl text-[#FFF]">
          Global Plans
        </h2>
        <p className="pt-5 text-xl flex justify-center font-outfit text-[#FFFFFF]">
          World’s Best Healthcare, Now Accessible and Affordable with
          MediPocket Global Membership Plan
        </p>
      </div>

      <div className="flex lg:flex-row flex-col w-[100%] justify-center mt-24">
        <div className="mx-auto w-2/3 lg:w-auto lg:ml-6 lg:mr-6 sm:mb-12"><GlobalLite /></div>
        <div className="mx-auto w-2/3 lg:w-auto lg:mr-6 lg:ml-6 sm:mb-4"><GlobalFamily /></div>
      </div>
    </section>
  );
};

export default Pricing;
