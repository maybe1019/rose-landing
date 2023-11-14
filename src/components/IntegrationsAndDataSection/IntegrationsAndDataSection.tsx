import React from "react";

const IntegrationsAndDataSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 my-20 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[32px] md:text-[36px] font-bold text-center">
        <div className="bg-[#1A1A1E] w-14 h-14 rounded-lg flex items-center justify-center">
          <img src="/static/img/icons/data.svg" alt="data" />
        </div>
        Integrations and Data
      </div>
      <div className="text-[20px] max-w-[800px] mx-auto text-center mt-5">
        Rose was built by former hedge fund analysts who know the pain of the
        research process, so we made sure our tool can integrate with any vendor
        or analytical tool.
      </div>
      <div className="flex justify-center mt-5 mb-10 lg:mb-0">
        <button className="py-2 px-10 rounded-3xl font-bold bg-primary translate-y-0 lg:translate-y-5">Request a Demo</button>
      </div>
      <div className="flex justify-center flex-col lg:flex-row flex-wrap">
        <img src="/static/img/rose-data-integration-desktop.svg" alt="rose data integration" className="!hidden lg:!block" />
        <img src="/static/img/rose-data-integration-mobile-icon.svg" alt="rose data integration" className="!block lg:!hidden" />
        <img src="/static/img/rose-data-integration-mobile-content.svg" alt="rose data integration" className="!block lg:!hidden" />
      </div>
    </div>
  );
};

export default IntegrationsAndDataSection;
