import React from "react";
import { PlatformSectionContents } from "./data";

const PlatformSection = () => {
  return (
    <div className="bg-[url('./assets/images/platform-background.svg')] bg-no-repeat bg-center bg-cover py-40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-white max-w-[720px] relative">
          <img src="/static/img/platform-equity-returns.svg" alt="equity returns" className="!hidden md:!block absolute left-full top-1/2 -translate-y-1/2" />
          <div className="text-primary font-bold">Platform</div>
          <div className="text-[32px] md:text-[36px] font-bold my-5">
            Mastery in Data Discovery and Visualization
          </div>
          <div className="text-[20px] md:text-[22px] font-normal mb-16">
            Rose AI is an intuitive platform designed for financial analysts and
            decision-makers, facilitating a Palantir-style data solution. Rose
            AI integrates advanced language models to offer a seamless journey
            from data discovery to insightful visualizations, ensuring every
            data point is explainable and traceable.
          </div>

          {PlatformSectionContents.map((qa, index) => (
            <div
              key={index}
              className="px-4 py-3 my-3 max-w-xl border-l-4 border-l-transparent transition-all hover:border-l-primary"
            >
              <div className="text-[20px] font-bold mb-3">{qa.title}</div>
              <div className="">{qa.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;
