import React from "react";

export default function StatsCards() {
  // Example data. You could also fetch or pass as props.
  const stats = [
    {
      title: "Total Earning",
      value: "242.65K",
      subtitle: "From the running month",
      bgColor: "bg-purple-200",
    },
    {
      title: "Average Earning",
      value: "17.347K",
      subtitle: "Daily Earning of this month",
      bgColor: "bg-blue-200",
    },
    {
      title: "Conversion Rate",
      value: "74.86%",
      subtitle: "+6.04% greater than last month",
      bgColor: "bg-green-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} rounded-md p-7 space-y-2 flex flex-col justify-between`}
        >
          {/* Title row with a small circle bullet */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="inline-block w-2 h-2 bg-gray-700 rounded-full" />
            <h2 className="text-sm font-medium text-gray-800">{stat.title}</h2>
          </div>

          {/* Main Value */}
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>

          {/* Subtitle */}
          <p className="text-sm text-gray-700">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
