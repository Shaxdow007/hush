import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import SecondaryBtn from "./SecondaryBtn";

const NavBar = () => {
  const links = ["home", "features", "community"];
  const [openNav, setOpenNav] = useState(false);
  const handelOpen = () => {
    setOpenNav((prev) => !prev);
  };
  return (
    <nav className="container mx-auto p-4 relative">
      <div className="flex justify-between items-center">
        {/* box1 */}
        <div className="logo">
          <a href="#home">
            <img src={Logo} alt="hush" />
          </a>
        </div>
        {/* box2 */}
        <div>
          <ul className="hidden md:flex items-center gap-4 capitalize">
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="text-white40 px-4 hover:text-whiteColor duration-300 ease-in"
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* box3 */}
        <div className="hidden md:block">
          <SecondaryBtn title="create account" />
        </div>

        {/* mobile menu */}
        <div
          className="md:hidden w-[30px] h-[25px] cursor-pointer"
          onClick={handelOpen}
        >
          <div className="bg-white40 w-full h-[2px] mb-[9px]"></div>
          <div className="bg-white40 w-full h-[2px] mb-[9px]"></div>
          <div className="bg-white40 w-full h-[2px]"></div>
        </div>

        <div
          className={
            openNav
              ? "z-10 bg-bgDark px-12 py-6 absolute top-[70px] right-0 md:hidden"
              : "hidden"
          }
        >
          <ul className="capitalize text-center">
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="block text-white40 p-2 hover:text-whiteColor duration-300 ease-in"
                    href={`#${item}`}
                    onClick={handelOpen}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
