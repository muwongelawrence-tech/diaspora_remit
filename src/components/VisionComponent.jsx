import React from "react";

function VisionComponent() {
  return (
    <section className=" text-white pt-16 block mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 px-3 ">
            <div className="h-full cursor-pointer justify-start">
              <img
                className="object-cover w-full  h-full lg:h-[500px]"
                src="images/blog2.png"
                alt="digital-Payment"
              />
            </div>

            <div className="h-[210px] w-full flex justify-end md:justify-center lg:justify-end bg-[#07142b] py-3 px-3 rounded-2xl">
              <div className="w-80 p-3">
                <p className="mb-3">
                  “Embracing the power of technology, our payment gateway serves
                  as the bridge that connects businesses and their customers.”
                </p>

                <h3>Muwonge Lawrence - CEO Diaspora</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full px-3">
          <div
            className={`flex items-center  space-x-5 mt-6 bg-yellow-100 py-3 px-4 rounded-lg`}
          >
            <div className="flex items-center justify-center w-12 md:w-14  h-12 md:h-14 bg-[#f2a908] rounded-md my-2 mb-5">
              <img
                className=""
                src="/images/Visionicon.png"
                alt={`vision`}
              />
            </div>

            <div>
              <h2 className="text-2xl my-2 text-[#161616]">Diaspora vision</h2>
              <p className="max-w-xs  text-[#161616]">
              To be the leading force in revolutionizing digital payments, setting new standards for security, efficiency, and user experience.
              </p>
            </div>
          </div>

          <div
            className={`flex items-center  space-x-5 mt-6 bg-yellow-100 py-3 px-4 max-w-full rounded-lg`}
          >
            <div className="flex items-center justify-center  w-12 md:w-14  h-12 md:h-14 bg-[#f2a908] rounded-md">
              <img className="" src="/images/MissionIcon.png" alt={`mission`} />
            </div>
            <div>
              <h2 className="text-2xl my-2 text-[#161616]">Diaspora Mission</h2>
              <p className="max-w-xs  text-[#161616]">
                 To empower businesses and individuals by providing seamless and secure payment solutions, fostering financial inclusivity, and enhancing the global economy through innovation and reliability. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionComponent;
