import FooterRecentItem from "./FooterRecentItem";
import React from "react";

const Footer = ({ recentsArray, onSearch, clearRecents }) => {
  return (
    <div className="w-114 mt-7">
      <div className="flex justify-between">
        <p className="text-lg font-semibold dark:text-white">Buscas recentes</p>
        <div
          className="hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-600 px-3 py-1 rounded-2xl transition-all duration-200 ease-in-out cursor-pointer"
          onClick={clearRecents}
        >
          <p className="font-semibold">Limpar</p>
        </div>
      </div>
      <FooterRecentItem recentsArray={recentsArray} onSearch={onSearch} />
    </div>
  );
};

export default Footer;
