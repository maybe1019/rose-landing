import React from "react";

const HeroSection = () => {
  return (
    <div
      className="text-white bg-[url('./assets/images/solutions-hero-background.png')] bg-no-repeat bg-cover"
      style={{ backgroundPosition: "center top" }}
    >
      <div className="pt-52 container px-3 md:px-5 mx-auto">
        <div className="flex gap-40 lg:gap-10 flex-col lg:flex-row items-center lg:items-start">
          <div className="flex flex-col gap-5 items-center lg:items-start max-w-[540px] order-2 lg:order-1">
            <div className="text-[48px] md:text-[64px] font-semibold text-center lg:text-left leading-tight">
              Rose AI Solutions
            </div>
            <div className="text-[20px] md:text-[24px] text-center lg:text-left">
              Experience tailored data-driven strategies for your specific
              needs.
            </div>
            <button className="px-10 py-2 bg-primary rounded-3xl">
              Request a Demo
            </button>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-0 grow max-w-[550px] flex justify-end mx-auto">
            <img
              src="/static/img/key-features-data-visualization.svg"
              alt="logic tree"
              className="block w-full"
            />
          </div>
        </div>
        <div className="flex gap-5 flex-col items-center lg:items-start py-40 max-w-[650px]">
          <div className="text-[48px] md:text-[64px] font-semibold text-center lg:text-left leading-tight">
            Industries <br className="!block sm:!hidden" /> We Serve
          </div>
          <div className="text-[20px] md:text-[24px] text-center lg:text-left">
            Rose AI pulls from broad datasets and is able to provide you with
            the data to illustrate nearly anything.
          </div>
          <button className="px-10 py-2 bg-primary rounded-3xl">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
