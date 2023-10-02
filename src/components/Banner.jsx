import React from "react";

function Banner() {
  return (
    <section className="bg-black text-white py-16 block  banner--skewed">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center mb-5">
          <div className="px-3 py-2 pl-5 md:pl-10">
            <h1 className="text-4xl md:text-6xl font-bold">
              Cloud Hosting for Pros
            </h1>
            <p className="text-lg md:text-2xl mb-5">
              Deploy your websites in less than 60 seconds.
            </p>
            <button className="py-2 px-4 rounded-full bg-orange-700 text-white font-bold text-lg hover:bg-orange-500 transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <div className="h-[500px] w-full">
            <img
              className="object-cover w-full h-full"
              src="images/banner.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
