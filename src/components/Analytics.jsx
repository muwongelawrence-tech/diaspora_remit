import React from "react";
import AnalyticsCard from "./AnalyticsCard";

function Analytics() {
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
      { analyticsData.map(({ id, value, description, extension }) => (
        <AnalyticsCard key={id} value={value} description={description} extension = {extension} />
      ))}
    </div>
  );
}

export default Analytics;
