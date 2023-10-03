import React from "react";

function Banner() {
  return (
    <section className=" bg-[#07142b] text-white pt-16 block mb-20">
      
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center mb-5">
          <div className="px-3 py-2 pl-5 md:pl-10">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              Effortless Payment Solutions for Your Business
            </h1>
            <p className="text-lg md:text-2xl mb-5">
              Mastering Your Financial Future
            </p>
            <button className="py-2 px-4 rounded-full bg-[#f2a908] text-[#07142b] font-bold text-lg hover:bg-orange-500 transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <div className="h-[550px] w-full cursor-pointer">
            <img
              className="object-contain w-full h-full  mt-28  rotate-12 hover:rotate-0 transition-all transform ease-in-out duration-300"
              src="images/DPHONE LEFT-1.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
