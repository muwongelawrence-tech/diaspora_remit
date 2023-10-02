import React from "react";
import Title from "./Title";

function Checkout() {
  return (
    <section className=" text-white py-16 block px-3">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center w-full h-full">
          <div className="h-[550px] w-full cursor-pointer">
            <img
              className="object-contain w-full h-full  -rotate-12 hover:rotate-0 transition-all transform ease-in-out duration-300"
              src="images/digipay-app-my-planning.png"
              alt="Banner"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mb-5 ">
          <Title title={"Futuristic Payment Gateway App"} />

          <div className={`flex items-center  space-x-5 mt-6`}>
            <div className="w-4 h-4 bg-[#66D097] border-[5px] border-[#D8F6EE] rounded-full my-2 mb-5" />
            <div>
              <h2 className="text-2xl my-2 text-[#161616]">Download The App</h2>
              <p className="max-w-sm md:max-w-md text-[#161616]">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa cum sociis.
              </p>
            </div>
          </div>

          <div className={`flex items-center  space-x-5 mt-6`}>
            <div className="w-4 h-4 bg-[#66D097] border-[5px] border-[#D8F6EE] rounded-full my-2 mb-5" />
            <div>
              <h2 className="text-2xl my-2 text-[#161616]">Create an Account</h2>
              <p className="max-w-sm md:max-w-md text-[#161616]">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa cum sociis.
              </p>
            </div>
          </div>

          <div className={`flex items-center  space-x-5 mt-6`}>
            <div className="w-4 h-4 bg-[#66D097] border-[5px] border-[#D8F6EE] rounded-full my-2 mb-5" />
            <div>
              <h2 className="text-2xl my-2 text-[#161616]">Verify & Start Transaction</h2>
              <p className="max-w-sm md:max-w-md text-[#161616]">
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

export default Checkout;
