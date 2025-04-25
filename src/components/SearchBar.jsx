import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex gap-4 justify-center">
      <input
        type="text"
        className="border-1 rounded-2xl px-2 py-1 w-80 focus:border-blue-700 focus:outline-none dark:text-white"
        placeholder="Digite o nome da cidade"
      />
      <button
        className="flex px-4 py-2 bg-blue-600 gap-4 text-white items-center justify-center rounded-2xl font-semibold cursor-pointer hover:bg-blue-800 w-30 dark:text-black"
        onClick={onSearch}
      >
        <Search className="text-white dark:text-black" size={18} />
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
