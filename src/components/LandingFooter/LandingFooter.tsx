import React from "react";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <div className="text-white py-5 container mx-auto px-4 md:px-10">
      <div className="flex flex-col items-center gap-5">
        <img
          className="h-8"
          src="/static/img/new_logo/png/RoseAIlogo-gradient.png"
          alt="logo"
        />
        <div className="text-[32px] md:text-[36px] font-bold text-center">Let’s get started on something great.</div>
        <div className="text-[20px] md:text-[24px] text-center">Join over 4,000+ startups already growing with Untitled.</div>
        <Link to={"/"} className="no-underline !text-white bg-primary rounded-3xl py-2 px-10">Sign up</Link>
      </div>
      <div className="flex justify-between py-16 flex-col md:flex-row gap-8">
        <div>© 2023 Rose AI. All rights reserved.</div>
        <div className="flex gap-3 flex-col md:flex-row">
          <Link to={"/terms"}>Terms</Link>
          <Link to={"/privacy"}>Privacy</Link>
          <Link to={"/cookies"}>Cookies</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
