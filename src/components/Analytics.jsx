import React from "react";
import AnalyticsCard from "./AnalyticsCard";

function Analytics() {
  const analyticsData = [
    {
      id: 1,
      value: "10+",
      description: "Years experience",
    },
    {
      id: 2,
      value: "15k+",
      description: "Positive Review",
    },
    {
      id: 3,
      value: "10k",
      description: "Global downloads",
    },
    {
      id: 4,
      value: "99%",
      description: "Return on investment",
    },
  ];
  return (
    <div className="w-full py-2 px-3 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center my-10">
      { analyticsData.map(({ id, value, description }) => (
        <AnalyticsCard key={id} value={value} description={description} />
      ))}
    </div>
  );
}

export default Analytics;
