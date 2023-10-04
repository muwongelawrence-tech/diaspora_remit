import React from "react";

function VisionComponent() {
  return (
    <section className=" text-white pt-16 block mb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 px-3 ">
          <div className="h-full cursor-pointer justify-start ">
            <img
              className="object-cover w-full h-full"
              src="images/blog2.png"
              alt="digital-Payment"
            />
          </div>

          <div className="h-[230px] w-full flex justify-end md:justify-center lg:justify-end bg-[#07142b] py-2 px-3 rounded-2xl">
            <div className="w-80 p-3">
              <p className="mb-3">
                “Embracing the power of technology, our payment gateway serves
                as the bridge that connects businesses and their customers.”
              </p>

              <h3>Muwonge Lawrence - CEO Digipay</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full px-3">
          <div
            className={`flex items-center  space-x-5 mt-6 bg-yellow-100 py-3 px-4 rounded-lg`}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#f2a908] rounded-md my-2 mb-5">
              <img
                className="w-full h-full object-cover"
                src="/images/vision.png"
                alt={`vision`}
              />
            </div>

            <div>
              <h2 className="text-2xl my-2 text-[#161616]">Diaspora vision</h2>
              <p className="max-w-xs  text-[#161616]">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa cum sociis.
              </p>
            </div>
          </div>

          <div
            className={`flex items-center  space-x-5 mt-6 bg-yellow-100 py-3 px-4 max-w-full rounded-lg`}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#f2a908] rounded-md my-2 mb-5">
              <img
                className="w-full h-full object-cover"
                src="/images/mission.png"
                alt={`mission`}
              />
            </div>
            <div>
              <h2 className="text-2xl my-2 text-[#161616]">Diaspora Mission</h2>
              <p className="max-w-xs  text-[#161616]">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa cum sociis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionComponent;
