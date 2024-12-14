import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  return (
    <div className="absolute left-0 top-0 w-full z-10">
      <div className="flex items-center justify-between container mx-auto px-6 py-4 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            Home
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#About">
            About
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Projects">
            Projects
          </a>
          <a
            className="cursor-pointer hover:text-gray-400"
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => setShowNav(true)}
          className="md:hidden w-6 cursor-pointer"
          alt=""
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showNav ? "fixed w-full" : "h-0 w-0"
        } top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className=" flex justify-end p-8 cursor-pointer">
          <img
            onClick={() => setShowNav(false)}
            src={assets.cross_icon}
            className=" w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowNav(false)}
            className="cursor-pointer rounded-full inline-block py-2 px-4"
            href="#Header"
          >
            Home
          </a>
          <a
            onClick={() => setShowNav(false)}
            className="cursor-pointer rounded-full inline-block py-2 px-4"
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => setShowNav(false)}
            className="cursor-pointer rounded-full inline-block py-2 px-4"
            href="#Projects"
          >
            Projects
          </a>
          <a
            onClick={() => setShowNav(false)}
            className="cursor-pointer rounded-full inline-block py-2 px-4"
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
