import React from "react";

function AnalyticsCard({ value, description }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-left text-[#161616]">
        {value}
      </p>
      <p className="text-left text-[#161616]">{description}</p>
    </div>
  );
}

export default AnalyticsCard;
