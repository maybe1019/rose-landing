import React from "react";
import { Link } from "react-router-dom";
import { CapabilitiesMockData } from "./data";

const Capabilties = () => {
  return (
    <div className="text-white flex flex-col items-center py-20 gap-5 relative">
      <img src="/static/img/solutions-bg-2.png" alt="bg" className="w-full h-full min-w-[500px] max-h-[1000px] absolute left-0 top-0 -z-10" />
      <div className="text-[48px] md:text-[64px] font-semibold leading-tight">
        Capabilties
      </div>
      <div className="text-[20px] md:text-[24px] text-center">
        Unlock opportunities with Rose AI.
      </div>
      <Link to={"/"} className="bg-primary px-10 py-2 rounded-3xl !text-white">
        See how we can help
      </Link>
      <div className="flex flex-wrap gap-5 px-3 md:px-10 max-w-[920px] mx-auto">
        {CapabilitiesMockData.map((data, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 flex-col flex text-white grow items-center gap-5 justify-center px-5 py-10 bg-[#0C0F14CC] rounded-xl border-[1px] border-[#FFFFFF0D] backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1f] flex items-center justify-center">
              <img
                src={`/static/img/icons/${data.icon}`}
                alt={data.icon}
                className="block w-5"
              />
            </div>
            <div className="text-[20px] font-semibold text-center">
              {data.title}
            </div>
            <div className="text-[14px] text-center">{data.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capabilties;
