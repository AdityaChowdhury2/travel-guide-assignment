import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { RiMenu3Line } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import FlagImage from "../assets/images/usa.png";
import Image from "../Image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center p-4 bg-transparent sm:bg-white shadow-md font-roboto">
      <div className="flex items-center w-full lg:w-auto">
        <Logo />
        <button
          className="lg:hidden text-gray-700 hover:text-red-500 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiMenu3Line size={24} />
        </button>
      </div>
      <ul
        className={`lg:flex lg:space-x-8 lg:mr-auto ${
          isOpen ? "flex" : "hidden"
        } flex-col lg:flex-row space-y-4 lg:space-y-0 mt-4 lg:mt-0`}
      >
        <li className="text-gray-700 hover:text-red-500">
          <a href="/">Transfers</a>
        </li>
        <li className="text-gray-700 hover:text-red-500">
          <a href="/">Bus Hire</a>
        </li>
        <li className="text-gray-700 hover:text-red-500 lg:hidden"></li>
      </ul>
      <div
        className={`flex items-center space-x-4 lg:space-x-4 ${
          isOpen ? "flex" : "hidden"
        } lg:flex`}
      >
        <img src="/help.png" alt="" />
        <Link to="/help">
          <button className="text-gray-700 hover:text-red-500">Help</button>
        </Link>
        <div className="flex items-center gap-2">
          <Image src={FlagImage} alt="usa" className=" " />
          <button className="text-gray-700 hover:text-red-500">Deutsch</button>
        </div>
        <span>|</span>
        <button className="text-gray-700 hover:text-red-500">EUR</button>
        <div className="  py-2 px-3 flex items-center justify-center gap-2 rounded-3xl border border-gray-300 bg-white">
          <FaRegUserCircle size={24} />
          <LuMenu size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
