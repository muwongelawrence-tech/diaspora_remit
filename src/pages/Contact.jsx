import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlinePhoneOutgoing, HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto">
      <Header />

      <section className=" bg-[#07142b] text-white pt-16 block mb-20 mx-3 mt-20 rounded-2xl">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 px-3 py-4 ">
          <div className="flex items-center mb-5">
            <div className="px-3 py-2 pl-5 md:pl-10">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
                We’d Love to Hear From You
              </h1>
              <p className="text-lg md:text-2xl mb-5">
                Our friendly team is always here to chat.
              </p>

              <div className="space-y-4 text-sm">
                <h5 className="font-bold">Contacts</h5>
                <p className=" flex items-center space-x-2">
                  <div className="flex items-center justify-center p-3 bg-[#0a2244] rounded-lg">
                    <HiOutlinePhone className="w-4 h-4 text-[#f2a908]" />
                  </div>
                  <span>+1587 988 1614</span>
                </p>
                <p className=" flex items-center space-x-2">
                  <div className="flex items-center justify-center p-3 bg-[#0a2244] rounded-lg">
                    <HiOutlinePhoneOutgoing className="w-4 h-4 text-[#f2a908]" />
                  </div>
                  <span>+1780 655 1614</span>
                </p>

                <p className=" flex items-center space-x-2">
                  <div className="flex items-center justify-center p-3 bg-[#0a2244] rounded-lg">
                    <HiOutlineMail className="w-4 h-4 text-[#f2a908]" />
                  </div>
                  <span>info@diasporaremit.com</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full cursor-pointer rounded-xl overflow-hidden">
              <img
                className="object-contain w-full h-full"
                src="images/customer_care.jpg"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center my-4 ">
        <div>
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1695113522/64185bc2ea0b01679317954_t4ckbu.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            alt="rr"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
