import React from "react";

function PlaystoreBanner() {
  return (
    <section className="relative bg-diaspora_bg h-[400px] lg:h-[600px] bg-opacity-80 bg-cover bg-no-repeat bg-center text-white pt-16 block mb-20">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-80" />
      <div className="absolute w-full h-full z-10 container grid grid-cols-1 gap-4">
        <div className="flex items-center mb-5">
          <div className="px-3 py-2 pl-5 md:pl-10 max-w-3xl">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
              Experience Seamless Payments With Our App, Download Now!
            </h1>
            <p className="text-sm md:text-lg mb-5 mt-2">
              Start your 30-day free trial today.
            </p>

            <div className="flex items-center space-x-4 justify-start mt-4 cursor-pointer">
              <div className="h-12 w-40 border border-white rounded-md">
                <img
                  className="w-full h-full object-cover"
                  src="/images/Mobile-app-store-badge-2.png"
                  alt=""
                />
              </div>

              <div className="h-12 w-40 border border-white rounded-md cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  src="/images/Mobile-play-store-badge-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaystoreBanner;
