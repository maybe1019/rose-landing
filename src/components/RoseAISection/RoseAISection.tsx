import React from "react";
import { RoseAIContent } from "./data";

const RoseAISection = () => {
  return (
    <div className="text-white py-20 bg-[url('./assets/images/rose-ai-background.svg')] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[32px] md:text-[36px] font-bold">
          <div className="w-14 h-14 rounded-lg bg-[#1B191E] flex items-center justify-center">
            <img src="/static/img/icons/zap-fast.svg" alt="zap fast" />
          </div>
          Why use Rose AI?
        </div>

        <div className="my-14 flex gap-5 flex-wrap w-full [&>div]:lg:w-1/3 [&>div]:xl:w-1/4">
          {RoseAIContent.map((qa, index) => (
            <div key={index} className="grow border-[1px] border-solid bg-[rgba(12,15,20,0.8)] border-[rgba(255,255,255,0.05)] rounded-xl py-10 flex flex-col items-center gap-4 px-3 backdrop-blur-md">
              <div className="w-12 h-12 bg-[#1B191E] flex justify-center items-center rounded-lg">
                <img src={`/static/img/icons/${qa.icon}`} alt={qa.icon} />
              </div>
              <div className="text-[20px] font-bold">{qa.title}</div>
              <div className="text-center max-w-[320px]">{qa.text}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="py-2 px-10 rounded-3xl bg-primary font-bold hover:opacity-95">Request a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default RoseAISection;
