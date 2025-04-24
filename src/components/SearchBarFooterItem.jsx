import React from "react";

const SearchBarFooterItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-blue-500" />
      <p className="text-gray-400">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
};

export default SearchBarFooterItem;
