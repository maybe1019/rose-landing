import React from "react";
import "./style.css";

const KeyFeaturesSection = () => {
  return (
    <div className="my-16 lg:my-32">
      <div className="flex flex-col sm:flex-row gap-5 items-center justify-center text-white font-bold text-[36px] py-5 mb-10">
        <div className="w-14 h-14 flex items-center justify-center bg-[#181B21] rounded-lg">
          <img src="/static/img/icons/speedometer-02.svg" alt="speedometer" />
        </div>
        Key Features
      </div>
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex gap-5 md:gap-6 flex-wrap">
          <div className="key-feature-container key-feature-container-1">
            <img
              src="/static/img/key-features-logic-trees.svg"
              alt="logic tree"
            />
            <div className="icon-big">
              <div>
                <img src="/static/img/icons/dataflow-04.svg" alt="dataflow" />
              </div>
              Logic Trees
            </div>
            <div className="content-text">
              Ensure clarity and explainability with traceable data points in
              Rose AI, preserving the integrity of every insight.
            </div>
          </div>

          <div className="key-feature-container key-feature-container-1">
            <img
              src="/static/img/key-features-data-visualization.svg"
              alt="logic tree"
            />
            <div className="icon-big">
              <div>
                <img
                  src="/static/img/icons/bar-chart-square-01.svg"
                  alt="dataflow"
                />
              </div>
              Dynamic Data Visualization
            </div>
            <div className="content-text">
              Easily transform your data into various insightful visualizations,
              from line charts to heatmaps, with Rose AI's diverse tools.
            </div>
          </div>

          <div className="key-feature-container key-feature-container-2">
            <div className="icon">
              <img
                src="/static/img/icons/message-chat-circle.svg"
                alt="message chat circle"
              />
            </div>
            <div className="title">Seamless Collaboration</div>
            <div className="content">
              Foster innovation by sharing workspaces, allowing team
              contributions while maintaining data integrity and security.
            </div>
          </div>

          <div className="key-feature-container key-feature-container-2">
            <div className="icon">
              <img
                src="/static/img/icons/bar-line-chart.svg"
                alt="bar line chart"
              />
            </div>
            <div className="title">Comprehensive Data Analysis</div>
            <div className="content">
              Dive deep into your data stories with Rose AI's robust analysis
              tools and over 100 built-in data transformations.
            </div>
          </div>

          <div className="key-feature-container key-feature-container-2">
            <div className="icon">
              <img src="/static/img/dataflow-03.svg" alt="dataflow" />
            </div>
            <div className="title">Diverse Data Sources</div>
            <div className="content">
              Connect effortlessly to a wide range of data sources, ensuring you
              always have access to the data you need.
            </div>
          </div>

          <div className="key-feature-container key-feature-container-2">
            <div className="icon">
              <img src="/static/img/icons/search-sm.svg" alt="search" />
            </div>
            <div className="title">Intuitive Data Discovery</div>
            <div className="content">
              Effortlessly find the data you need with Rose AI's advanced search
              capabilities, powered by NLP and open-source LLMs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
