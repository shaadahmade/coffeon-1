"use client";

import { useState } from "react";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [lang, setLang] = useState<"ENG" | "AR">("ENG");

  const toggleLang = () => {
    setLang(lang === "ENG" ? "AR" : "ENG");
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-black text-slate-50 shadow-sm">
      {/* Left Menu */}
      <div className="flex gap-6">
        <Link href="/" className="rounded-full px-5 py-2 font-semibold ">
          Home
        </Link>
        <Link href="/blog" className="rounded-full px-5 py-2 font-semibold ">
          Blog
        </Link>
        <Link href="/contact" className="rounded-full px-5 py-2 font-semibold ">
          Contact
        </Link>
      </div>

      {/* Center Logo */}
      <div  className="flex items-center justify-center ">
       <img className="w-full h-16 object-cover -left-20 relative" src="/logo.png" alt="" />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        

        {/* Language Toggle */}
        <button
          onClick={toggleLang}
          className="px-4 py-2 rounded-full border border-gray-400 text-sm font-medium"
        >
          {lang}
        </button>
      </div>
    </nav>
  );
}
