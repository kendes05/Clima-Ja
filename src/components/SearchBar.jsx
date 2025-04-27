import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim() !== "") {
        onSearch(input.trim());
      }
    }
  };

  const handleClick = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      <input
        type="text"
        className="border-1 rounded-2xl px-2 py-1 w-80 focus:border-blue-700 focus:outline-none dark:text-white"
        placeholder="Digite o nome da cidade"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="flex px-4 py-2 bg-blue-600 gap-4 text-white items-center justify-center rounded-2xl font-semibold cursor-pointer hover:bg-blue-800 w-30 dark:text-black"
        onClick={handleClick}
      >
        <Search className="text-white dark:text-black" size={18} />
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
