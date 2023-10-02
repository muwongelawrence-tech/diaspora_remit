import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Payments from "../components/Payments";
import Checkout from "../components/Checkout";

function Home() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <Banner />
      <Payments/>

      <Checkout/>
      <Footer />

      {/* <div className="flex items-center justify-center p-5 mt-20 ">
        <Banner />
      </div>

      <div className="flex items-center justify-center p-5 mt-20 ">
         <Footer />
      </div> */}
    </div>
  );
}

export default Home;
