import React from "react";

// eslint-disable-next-line no-unused-vars
const WeatherCardFooterItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-blue-500" />
      <p className="text-gray-400">{label}</p>
      <p className="font-bold dark:text-white">{value}</p>
    </div>
  );
};

export default WeatherCardFooterItem;
