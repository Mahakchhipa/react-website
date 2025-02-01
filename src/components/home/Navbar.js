import Image from "next/image";
import React from "react";
import logo from "../../../public/img/logo.webp";
import { FaRedditAlien } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSkype } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="flex h-12 w-full ">
        <div className="text-end absolute right-24 py-2 font-medium gap-3 flex ">
          <div className="gap-1 flex">
            <div>
              <BiLogoGmail className="text-2xl" />
            </div>{" "}
            <div> info@imgglobalinfotech.com</div>
          </div>
          <div className="gap-1 flex">
            <div>
              <FaSkype className="text-2xl" />
            </div>
            <div> live:kunwar.neeraj.rajput </div>
          </div>
        </div>
      </div>
      <div>
        <nav className="h-20 w-full fixed bg-sky-700  text-white ">
          <div className="flex align-middle justify-evenly items-center py-2">
            <Image src={logo} height={200} width={200} alt="logo-img" />

            <ul className="flex text-sm   font-bold gap-8 ">
              <li className="hover:text-sky-500 hover:scale-110">Company </li>

              <li className="hover:text-sky-500 hover:scale-110">Services </li>
              <li className="hover:text-sky-500 hover:scale-110">
                Trending Solutions{" "}
              </li>
              <li className="hover:text-sky-500 hover:scale-110">
                Hire Developers{" "}
              </li>
              <li className="hover:text-sky-500 hover:scale-110">Work </li>
              <li className="hover:text-sky-500 hover:scale-110">Blogs </li>
              <li className="hover:text-sky-500 hover:scale-110">
                Contact Us{" "}
              </li>
            </ul>
            <button className="bg-amber-600 flex  gap-2 text-center px-4 py-2 rounded-3xl font-bold hover:bg-amber-800 animate-pulse ">
              Request a Quote
              <FaRedditAlien className="text-2xl" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
