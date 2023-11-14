import React from "react";

const CustomersSection = () => {
  return (
    <div className="container mx-auto my-40 lg:my-52 px-3 md:px-10 text-white">
      <div className="my-14 flex gap-10 items-center justify-between flex-col md:flex-row">
        <div className="max-w-2xl flex flex-col gap-5 items-center md:items-start order-2 md:order-1 mt-10 md:mt-0">
          <div className="text-primary font-bold text-center md:text-left">We serve our customers</div>
          <div className="text-[32px] lg:text-[36px] font-bold text-center md:text-left">
            Purpose-Built Solutions for Your Organization
          </div>
          <div className="text-[20px] md:text-[24px] font-bold text-center md:text-left">
            Harness Rose AI’s deep industry expertise and proven success with
            solutions tailor-made for your organization.
          </div>
          <div className="text-[#D9D9D9] text-center md:text-left">
            By partnering with us, you gain access to a wealth of industry
            expertise, ensuring practical and effective approaches to your
            data-driven challenges. <br /> <br /> Our focus is on delivering
            robust, reliable technology that enhances your decision-making and
            drives your organization towards sustainable success.
          </div>
          <div>
            <button className="font-bold bg-primary py-2 px-10 rounded-3xl">
              Request a Demo
            </button>
          </div>
        </div>
        <div className="w-full md:w-0 grow max-w-[420px] order-1 md:order-2">
          <img
            src="/static/img/customer-content.svg"
            alt="customer content"
            className="block w-full"
          />
        </div>
      </div>
      <div className="text-center max-w-[732px] mx-auto text-[24px] font-semibold md:font-bold mt-32 px-2">
        "Rose has allowed me to keep up with markets and macro since I left
        Bridgewater. It's an amazing product!"
      </div>
      <div className="flex flex-col md:flex-row items-center mt-8 justify-center gap-2 md:gap-4">
        <img
          src="/static/img/user-daniel-saedi.svg"
          alt="daniel saedi"
          className="block w-16 h-16 rounded-full"
        />
        <div className="text-[18px] font-bold">Daniel Saedi</div>
        <div className="font-bold">Founder, Minerva Data</div>
        <div className="flex items-center gap-1">
          {new Array(5).fill(0).map((_, index) => (
            <img
              src="/static/img/icons/star-blue-fill.svg"
              alt="star blue fill"
              key={index}
              className="w-5 h-5 block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersSection;
