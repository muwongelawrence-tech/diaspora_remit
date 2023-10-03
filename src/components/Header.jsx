import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

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

        <div
          className={`block md:flex flex-col items-start justify-start md:flex-row md:justify-end space-x-4 space-y-3 md:space-y-0  w-full p-3 ${
            expanded ? "block" : "hidden"
          } `}
        >
          <Link to="/" className="text-gray-300 hover:text-[#f2a908] text-center  cursor-pointer">Home</Link>
          <Link to="/coming" className="text-gray-300 hover:text-[#f2a908] text-center  cursor-pointer">About</Link>
          < Link to="/coming" className="text-gray-300 hover:text-[#f2a908] text-center cursor-pointer ">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
