"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-slate-400 h-screen">
      <div className="flex justify-between items-center max-sm:p-4 px-6 py-2 bg-[#1E293B]">
        <div className="sm:text-3xl text-2xl sm:font-bold font-medium text-white">
          Tailwind
        </div>
        <div className="flex items-center justify-between">
          <ul className="sm:flex gap-2 hidden">
            <li className="p-2 m-2 transition-all duration-300 text-white text-xl font-semibold hover:text-[#1E293B] hover:bg-white rounded"><Link href="/">Home</Link></li>
            <li className="p-2 m-2 transition-all duration-300 text-white text-xl font-semibold hover:text-[#1E293B] hover:bg-white rounded"><Link href="/about">About</Link></li>
            <li className="p-2 m-2 transition-all duration-300 text-white text-xl font-semibold hover:text-[#1E293B] hover:bg-white rounded"><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="sm:hidden text-white" onClick={toggleMenu}>
            <i className='bx bx-menu text-3xl'></i>
          </div>
        </div>
      </div>
      <div className=
        {
          clsx("fixed h-full w-full sm:hidden bg-black/50 top-0 left-0 transition-all ease-in-out duration-500", menuOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="bg-[#1E293B] text-white flex flex-col gap-20 h-full py-14 px-10 w-[75%]">
          <div className='text-white text-3xl font-medium' onClick={closeMenu}>&#10005;</div>
          <ul className="flex flex-col gap-8">
            <li className="uppercase text-lg font-medium text-white" onClick={closeMenu}><Link href="/">Home</Link></li>
            <li className="uppercase text-lg font-medium text-white" onClick={closeMenu}><Link href="/">About</Link></li>
            <li className="uppercase text-lg font-medium text-white" onClick={closeMenu}><Link href="/">Contact</Link></li>
          </ul>
        </div>
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
