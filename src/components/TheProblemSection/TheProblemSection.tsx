import React from "react";

const TheProblemSection = () => {
  return (
    <div className="container mx-auto my-14 lg:my-20 px-5 lg:px-20 z-[1] py-14">
      <div className="text-primary font-bold">The Problem</div>
      <div className="text-white font-semibold text-[32px] lg:text-[32px] xl:text-[34px] 2xl:text-[36px] leading-tight max-w-2xl">
        Data is Important, but Data is Hard
      </div>
      <div className="text-white text-[20px] md:text-[22px] xl:text-[24px] my-4 z-[1] relative max-w-2xl">
        The necessity for a unified platform that simplifies data discovery,
        visualization, and analysis while preserving data integrity is more
        critical than ever.
      </div>

      <div className="relative aspect-[5/2] my-14 md:my-0 z-0">
        <div className="w-[calc(100vw-20px)] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0">
          <img
            src="/static/img/the-problem-content-data-map.png"
            alt="the problem"
            className="block w-full"
          />
        </div>
      </div>

      <div className="relative z-[1] gap-6 flex flex-wrap">
        <div className="max-w-[350px]">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#101828] mb-3">
            <img src="/static/img/file-question-02.svg" alt="file-question" />
          </div>
          <div className="text-white">
            In today's data-driven financial landscape, analysts and
            decision-makers are often overwhelmed by the sheer volume and
            complexity of manipulating and visualizing.
          </div>
        </div>
        <div className="max-w-[350px]">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#101828] mb-3">
            <img src="/static/img/dataflow-03.svg" alt="dataflow" />
          </div>
          <div className="text-white">
            Ensuring data reliability and translating vast datasets into
            actionable insights has become a costly challenge.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProblemSection;
