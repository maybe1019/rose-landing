import React from "react";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="bg-[url('./assets/images/banner-background.svg')] bg-no-repeat bg-center bg-cover min-h-screen pt-24 px-5 md:px-20 xl:px-28 flex flex-col lg:flex-row items-center pb-20 lg:pb-0">
      <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
        <div className="text-white font-semibold text-[42px] lg:text-[54px] xl:text-[60px] 2xl:text-[64px] leading-tight text-center lg:text-left">
          Narratives <br className="!block lg:!hidden" /> from{" "}
          <br className="!hidden lg:!block" /> numbers
        </div>
        <div className="text-white text-[18px] md:text-[22px] xl:text-[24px] my-4 text-center lg:text-left max-w-sm mx-auto lg:mx-0">
          Navigate and Visualize Your Data with Unparalleled Ease and Integrity.
        </div>
        <div className="text-primary font-bold my-2 pb-2 text-center lg:text-left">
          Discover the difference with Rose AI
        </div>
        <Link
          to="/register"
          className="no-underline bg-primary py-3 px-10 rounded-full !text-white font-bold"
        >
          Sign up
        </Link>
      </div>
      <div className="w-full lg:w-1/2 grow lg:grow-0 order-1 lg:order-2 pt-10 lg:pt-0">
        <img
          src="/static/img/banner-content.svg"
          alt="banner-content"
          className="max-w-full mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default BannerSection;
