import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex gap-4 justify-center">
      <input
        type="text"
        className="border-1 border-zinc-500 rounded-2xl px-2 py-1 w-80 "
        placeholder="Digite o nome da cidade"
      />
      <button
        className="flex px-4 py-2 bg-blue-600 gap-4 text-white items-center justify-center rounded-2xl font-semibold cursor-pointer hover:bg-blue-800 w-30"
        onClick={onSearch}
      >
        <Search color="white" size={18} />
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
