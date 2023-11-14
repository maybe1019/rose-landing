import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="h-20 md:h-24 px-5 md:px-10 flex items-center fixed top-0 left-0 z-10 w-full backdrop-blur-sm">
      <div>
        <Link to={"/"} className="no-underline block">
          <img
            className="h-8"
            src="/static/img/new_logo/png/RoseAIlogo-gradient.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="!hidden md:!flex items-center text-white font-semibold ml-14 gap-8">
        <Link to={"/blogs"} className="p-2 hover:text-primary transition-all">
          Blog
        </Link>
        <Link
          to={"/solutions"}
          className="p-2 hover:text-primary transition-all"
        >
          Solutions
        </Link>
      </div>

      <div className="grow"></div>

      <div className="items-center text-white font-bold !hidden md:!flex">
        <Link
          to={"/login"}
          className="px-10 py-2 rounded-3xl bg-transparent hover:text-primary transition-all"
        >
          Log in
        </Link>
        <Link
          to={"/register"}
          className="px-10 py-2 rounded-3xl bg-primary hover:opacity-90 transition-all"
        >
          Sign up
        </Link>
      </div>
      <button className="p-1 !block md:!hidden" onClick={() => setShowMobileMenu((prev) => !prev)}>
        {showMobileMenu ? (
          <RiCloseFill className="text-white text-[24px]" />
        ) : (
          <IoMenu className="text-white text-[24px]" />
        )}
      </button>
      {showMobileMenu && (
        <div className="h-screen w-full fixed top-0 left-0 bg-black -z-10">
          <div className="h-full w-full bg-[url('./assets/images/mobile-menu-background.svg')] bg-no-repeat bg-cover bg-center pt-20 flex flex-col pb-10 px-10">
            <div className="text-white flex flex-col gap-5 mt-10 font-bold text-[32px]">
              <Link to={"/"}>Home</Link>
              <Link to={"/blogs"}>Blog</Link>
              <Link to={"/solutions"}>Solutions</Link>
            </div>
            <div className="px-5 flex gap-4 flex-col mt-auto text-white font-bold">
              <Link
                to={"/login"}
                className="bg-black rounded-3xl py-2 w-full text-center"
              >
                Lig in
              </Link>
              <Link
                to={"/login"}
                className="bg-primary rounded-3xl py-2 w-full text-center"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingHeader;
