import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

function Header() {

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <header>l
      <nav
        className={`bg-black py-4 px-4 flex items-center justify-between fixed top-0 z-50 w-full`}
      >
        <a className="text-white text-2xl font-semibold" href="/">
          <img src="images/logo.svg" alt="Logo" />
        </a>

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
            <a className="text-white" href="#">
              Hosting
            </a>
          </li>
          <li>
            <a className="text-white" href="#">
              VPS
            </a>
          </li>
          <li>
            <a className="text-white" href="#">
              Domain
            </a>
          </li>
          <li>
            <a className="text-white" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
