import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <header>
      <nav
        className={`bg-[#07142b] px-4 flex flex-col md:flex-row items-center justify-between fixed top-0 z-50 w-full`}
      >
        <div className="flex items-center justify-between w-full">
          <div className=" flex items-center justify-center w-32 h-14">
            <img src="images/logo2.png" alt="Logo" />
          </div>

          <button
            className=" flex items-center justify-center p-2 border border-[#0a2244] rounded-full md:hidden text-white text-xl"
            onClick={toggleExpanded}
          >
            <HiMenu className="w-5 h-5" />
          </button>
        </div>

        <div className={`flex flex-col items-center justify-center md:flex-row md:justify-end space-x-4 space-y-3 md:space-y-0  w-full p-3 ${expanded ? "block" : "hidden"} `}>
          <p className="text-gray-300 hover:text-white">Home</p>
          <p className="text-gray-300 hover:text-white">About</p>
          <p className="text-gray-300 hover:text-white">Contact</p>
        </div>

        {/* <ul
          className={`block md:flex items-center justify-center space-x-4  ${expanded ? "block" : "hidden"}`}
        >
          <li>
            <a className="text-gray-300 hover:text-white" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white" href="#">
              Contact
            </a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
