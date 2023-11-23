import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AnalyticsCard from "./AnalyticsCard";

function Analytics() {

  const [counterOn, setCounterOn] = useState();
  const analyticsData = [
    {
      id: 1,
      value: 10,
      extension: "+",
      description: "Years experience",
    },
    {
      id: 2,
      value: 15,
      extension: "k+",
      description: "Positive Review",
    },
    {
      id: 3,
      value: 10,
      extension: "k",
      description: "Global downloads",
    },
    {
      id: 4,
      value: 99,
      extension: "%",
      description: "Return on investment",
    },
  ];
  return (
    <div className="w-full py-2 px-3 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center my-10">
     

    <div className="w-full flex flex-col items-center justify-center">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-left text-[#161616]">
            {counterOn && (
              <CountUp start={0} end={analyticsData[0].value} delay={0} duration={2} />
            )}
            <span>{analyticsData[0].extension}</span>
          </p>
          <p className="text-left text-[#161616]">{analyticsData[0].description}</p>
        </div>
        </ScrollTrigger>
    </div>

    <div className="w-full flex flex-col items-center justify-center">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-left text-[#161616]">
            {counterOn && (
              <CountUp start={0} end={analyticsData[1].value} delay={0} duration={2} />
            )}
            <span>{analyticsData[1].extension}</span>
          </p>
          <p className="text-left text-[#161616]">{analyticsData[1].description}</p>
        </div>
        </ScrollTrigger>
    </div>

    <div className="w-full flex flex-col items-center justify-center">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-left text-[#161616]">
            {counterOn && (
              <CountUp start={0} end={analyticsData[2].value} delay={0} duration={2} />
            )}
            <span>{analyticsData[2].extension}</span>
          </p>
          <p className="text-left text-[#161616]">{analyticsData[2].description}</p>
        </div>
        </ScrollTrigger>
    </div>

    <div className="w-full flex flex-col items-center justify-center">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-left text-[#161616]">
            {counterOn && (
              <CountUp start={0} end={analyticsData[3].value} delay={0} duration={2} />
            )}
            <span>{analyticsData[3].extension}</span>
          </p>
          <p className="text-left text-[#161616]">{analyticsData[3].description}</p>
        </div>
        </ScrollTrigger>
    </div>

    </div>
  );
}

export default Analytics;
