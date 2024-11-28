"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-slate-400 h-screen">
      <div className="flex justify-between items-center max-sm:p-4 px-6 py-2 bg-[#1E293B]">
        <div className="sm:text-3xl text-2xl sm:font-bold font-medium text-white">
          Tailwind
        </div>
        <button
          className="text-white sm:text-3xl text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        <ul
          className={`sm:flex sm:text-xl text-lg sm:font-medium sm:flex-row flex-col sm:static absolute left-0 top-16 w-full sm:w-auto bg-[#1E293B] sm:bg-transparent transition-all duration-500 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li className="p-2 m-2 text-white hover:text-[#1E293B] hover:bg-white rounded">
            <a href="/">Home</a>
          </li>
          <li className="p-2 m-2 text-white hover:text-[#1E293B] hover:bg-white rounded">
            <a href="/">About</a>
          </li>
          <li className="p-2 m-2 text-white hover:text-[#1E293B] hover:bg-white rounded">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex sm:flex-row flex-col text-xl">
        <div className="bg-red-500 sm:w-full h-[200px] max-sm:p-4">
          First div
        </div>
        <div className="bg-green-500 sm:w-1/2 h-[200px] max-sm:p-4">
          Second div
        </div>
        <div className="bg-blue-500 sm:w-1/2 h-[200px] max-sm:p-4">
          Third div
        </div>
      </div>
    </div>
  );
}
