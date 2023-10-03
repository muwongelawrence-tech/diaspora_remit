import React from "react";
import Title from "./Title";
import { HiCheck } from "react-icons/hi";

function DigitalPayment() {
  return (
    <section className=" text-white py-16 block px-3">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col  mb-5">
          <Title title={"Digital Payment Gateway Solution"} />

          <div className="flex items-center justify-center my-3 px-6 w-full ">
            <p className="text-[#161616]">
              Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa cum sociis natoque
              penatibus et magnis dis.
            </p>
          </div>

          <div className="my-3 px-6 w-full">
            <div className={`flex items-center  space-x-5 mt-6`}>
              <HiCheck className="w-5 h-5 text-[#f2a908]" />

              <div>
                <p className="max-w-sm md:max-w-md text-[#161616]">
                  Comprehensive Financial Planning.
                </p>
              </div>
            </div>

            <div className={`flex items-center  space-x-5 mt-6 `}>
              <HiCheck className="w-5 h-5 text-[#f2a908]" />
              <div>
                <p className="max-w-sm md:max-w-md text-[#161616]">
                  Personalized Approach
                </p>
              </div>
            </div>

            <div className={`flex items-center  space-x-5 mt-6`}>
              <HiCheck className="w-5 h-5 text-[#f2a908]" />
              <div>
                <p className="max-w-sm md:max-w-md text-[#161616]">
                  Investment Management
                </p>
              </div>
            </div>

            <div className={`flex items-center  space-x-5 mt-6`}>
              <HiCheck className="w-5 h-5 text-[#f2a908]" />
              <div>
                <p className="max-w-sm md:max-w-md text-[#161616]">
                  Platform Payment
                </p>
              </div>
            </div>

            <div className={`flex items-center  space-x-5 mt-6`}>
              <HiCheck className="w-5 h-5 text-[#f2a908]" />
              <div>
                <p className="max-w-sm md:max-w-md text-[#161616]">
                  Recurring Payment
                </p>
              </div>
            </div>

            <div className={`flex items-center  space-x-5 mt-6`}>
              <HiCheck className="w-5 h-5 text-[#f2a908]" />
              <div>
                <p className="max-w-sm md:max-w-md text-[#161616]">
                  Anomali Detection
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full ">
          <div className="h-full w-full cursor-pointer justify-end">
            <img
              className="object-contain w-full h-full"
              src="images/african-man-holding-ipadFLIPPED-1.png"
              alt="digital-Payment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalPayment;
