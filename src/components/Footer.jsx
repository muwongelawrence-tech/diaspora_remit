import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlinePhoneOutgoing, HiOutlineMail } from "react-icons/hi";

function Footer() {
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let time = `${date}/${month}/${year}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 pl-16 pr-16 py-14 bg-[#07142b] text-gray-100">
      <div className="space-y-4 text-sm">
        <div className="flex items-center">
          <div className=" flex items-center justify-center w-32 h-14">
            <img src="images/logo2.png" alt="Logo" />
          </div>
          <h5 className="font-bold"> Diaspora </h5>
        </div>

        <h5 className="w-full  md:max-w-[250px] text-left">
          Our payment gateway app is a powerful tool that enables businesses and
          individuals.
        </h5>

        <h5 className="my-2 text-sm justify-self-center md:justify-self-start">
          {" "}
          Follow us on .....
        </h5>
        <ul className="flex space-x-3 cursor-pointer justify-self-center md:justify-self-start">
          <li className="flex items-center justify-center p-1 border border-[#0a2244] rounded-md hover:bg-[#0a2244]">
            <a href="https://facebook.com">
              <FacebookIcon />
            </a>
          </li>

          <li className="flex items-center justify-center p-1 border border-[#0a2244] rounded-md hover:bg-[#0a2244]">
            <a href="https://twitter.com">
              <TwitterIcon />
            </a>
          </li>

          <li className="flex items-center justify-center p-1 border border-[#0a2244] rounded-md hover:bg-[#0a2244]">
            <a href="https://instagram.com">
              <InstagramIcon />
            </a>
          </li>

          <li className="flex items-center justify-center p-1 border border-[#0a2244] rounded-md hover:bg-[#0a2244]">
            <a href="https://youtube.com">
              <YouTubeIcon />
            </a>
          </li>
        </ul>

        <h5 className="text-sm mt-3 justify-self-center md:justify-self-start">
          On {time}{" "}
        </h5>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="font-bold">Quick Links</h5>
        <p>About Us</p>
        <p>Services</p>
        <p>Pricing</p>
        <p>Team </p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="font-bold">Address</h5>
        <p>15015 106 Ave Nw </p>
        <p>Edmonton AB</p>
        <p>T5P4J1 Canada</p>
        <p>Canadian Offices </p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="font-bold">Contacts</h5>
        <p className=" flex items-center space-x-2">
          <div className="flex items-center justify-center p-3 bg-[#0a2244] rounded-full">
            <HiOutlinePhone className="w-4 h-4 text-white" />
          </div>
          <span>+1587 988 1614</span>
        </p>
        <p className=" flex items-center space-x-2">
          <div className="flex items-center justify-center p-3 bg-[#0a2244] rounded-full">
            <HiOutlinePhoneOutgoing className="w-4 h-4 text-white" />
          </div>
          <span>+1780 655 1614</span>
        </p>

        <p className=" flex items-center space-x-2">
          <div className="flex items-center justify-center p-3 bg-[#0a2244] rounded-full">
            <HiOutlineMail className="w-4 h-4 text-white" />
          </div>
          <span>info@diasporaremit.com</span>
        </p>
      </div>

      <div className="mt-2 col-span-full text-center text-sm md:text-base mb-2">
        Copyright &copy;
        <span>{year}</span>
        All rights reserved | cc Canada
      </div>
    </div>
  );
}

export default Footer;
