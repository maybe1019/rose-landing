import React from "react";
import { Link } from "react-router-dom";
import { InstitutionalSolutionsMockData } from "./data";

const InstitutionalSolutions = () => {
  return (
    <div>
      <div className="px-3 sm:px-5 md:px-10  py-20 container mx-auto flex flex-col gap-5 items-center text-white">
        <div className="text-[48px] md:text-[64px] font-semibold leading-tight text-center md:text-left">
          Institutional Solutions
        </div>
        <div className="text-[20px] md:text-[24px] text-center">
          Your pathway to data-driven success, from inception to implementation.
        </div>
        <Link
          to={"/"}
          className="bg-primary px-10 py-2 rounded-3xl !text-white"
        >
          Get a Quote
        </Link>
        <div className="flex flex-col gap-5 mt-10 w-full">
          {InstitutionalSolutionsMockData.map((data, index) => (
            <div key={index} className="py-12 px-6 md:px-12 bg-[#0C0F14CC] border-[1px] border-[#FFFFFF0D] rounded-lg backdrop-blur-sm flex justify-between w-full gap-5 flex-col lg:flex-row items-center md:items-start">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-center md:text-left text-[#FFFFFFCC]">
                  {data.step}: <span className="font-semibold text-white">{data.period}</span>
                </div>
                <div className="font-semibold text-[24px] text-center md:text-left">{data.title}</div>
              </div>
              <div className="max-w-[500px] text-center md:text-left">{data.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstitutionalSolutions;
