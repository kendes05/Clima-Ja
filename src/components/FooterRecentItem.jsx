import React from "react";

const FooterRecentItem = ({ recentsArray, onSearch }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {recentsArray.length > 0 &&
        recentsArray.map((city, index) => (
          <div
            className="bg-zinc-100 w-min px-3 py-1 rounded-3xl mt-3 cursor-pointer hover:bg-zinc-300 dark:bg-slate-700 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out"
            key={index}
          >
            <p className="font-semibold dark:text-white">{city}</p>
          </div>
        ))}
    </div>
  );
};

export default FooterRecentItem;
