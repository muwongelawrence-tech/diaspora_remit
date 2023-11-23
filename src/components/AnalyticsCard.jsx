import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function AnalyticsCard({ value, description, extension }) {

  const [counterOn, setCounterOn] = useState(false);
  const [ countupTo , setCountupTo] = useState(200);


  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-left text-[#161616]">
            {counterOn && (
              <CountUp start={0} end={countupTo} delay={0} duration={2} />
            )}
            <span>{extension}</span>
          </p>
          <p className="text-left text-[#161616]">{description}</p>
        </div>
        </ScrollTrigger>
    </div>
  );
}

export default AnalyticsCard;
