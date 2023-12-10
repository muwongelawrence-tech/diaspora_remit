import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PlaystoreBanner from "../components/PlaystoreBanner";
import Title from "../components/Title";
import VisionComponent from "../components/VisionComponent";

function About() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto">
      <Header />

      <section className=" bg-[#07142b] text-white py-20 block h-[400px] ">
        <div className="container grid grid-cols-1 gap-4">
          <div className="flex items-center mb-5">
            <div className="px-3 py-2 pl-5 md:pl-10  max-w-3xl">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
                Discover Our Trustworthy Payment Gateway Solution
              </h1>
              <p className="text-md md:text-lg my-5 ">
                Mastering Your Financial Future
              </p>
              <button className="py-2 px-4 rounded-full bg-[#f2a908] text-[#07142b] font-bold text-lg hover:bg-orange-500 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-white py-16 block px-3">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center mb-5 ">
            <Title title={"Simplifying Secure Transactions"} />

            <div className={`flex items-center  space-x-5 mt-6`}>
              <div>
                <h2 className="text-2xl my-4 text-[#161616]">
                  Revolutionizing Digital Payments exploring the Future
                </h2>
                <p className="max-w-xs md:max-w-md text-[#161616]">
                  In the dynamic landscape of digital payments, we are at the forefront of a transformative journey. With a commitment to innovation and a passion for redefining the user experience, our payment gateway is dedicated to exploring the future of financial transactions. As we embrace cutting-edge technology, security, and efficiency, we envision a world where digital payments are not just transactions but seamless and empowering interactions.
                </p>

                <h2 className="text-xl my-4 text-[#161616]">
                   Our Services
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-full">
            <div className="h-[490px] w-full cursor-pointer">
              <img
                className="object-contain w-full h-full  rotate-12 hover:rotate-0 transition-all transform ease-in-out duration-300"
                src="images/DPHONE LEFT-1.png"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </section>

      <VisionComponent/>

      <PlaystoreBanner />
      <Footer />
    </div>
  );
}

export default About;
