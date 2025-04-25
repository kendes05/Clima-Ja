import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import React from "react";

const ToggleItem = ({ isDark, onToggle }) => {
  return (
    <button
      className="fixed top-4 right-4 cursor-pointer hover:bg-zinc-300 rounded p-1 transition-all duration-200 ease-in-out"
      onClick={onToggle}
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-white" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
};

export default ToggleItem;
