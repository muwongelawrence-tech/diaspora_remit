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
        className={`bg-[#07142b] px-4 flex items-center justify-between fixed top-0 z-50 w-full`}
      >
        <div className=" flex items-center justify-center w-32 h-14">
          <img src="images/logo2.png" alt="Logo" />
        </div>

        <button
          className="md:hidden text-white text-xl"
          onClick={ toggleExpanded }
        >
          <HiMenu className="w-5 h-5" />
        </button>

        <ul
          className={`block md:flex space-x-4 ${
            expanded ? "block" : "hidden"
          }`}
        >
          <li>
            <a className="text-gray-300 hover:text-white" href="#">
              Hosting
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white" href="#">
              VPS
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white" href="#">
              Domain
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
