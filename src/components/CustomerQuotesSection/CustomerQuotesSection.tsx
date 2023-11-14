import React from "react";
import { CustomerQuotes } from "./data";

const CustomerQuotesSection = () => {
  return (
    <div className="bg-[url('./assets/images/platform-background.svg')] bg-no-repeat bg-center bg-cover py-20">
      <div className="text-white max-w-3xl flex flex-col gap-16 mx-auto">
        {CustomerQuotes.map((customer, index) => (
          <div key={index} className="flex flex-col gap-2 items-center px-3">
            <div className="text-[22px] font-medium text-center">
              {customer.text}
            </div>
            <div className="w-14 h-14 rounded-full bg-[#D9D9D9]">
              {customer.image !== "" && (
                <img
                  src={customer.image}
                  alt="customer"
                  className="w-full h-full block"
                />
              )}
            </div>
            <div className="text-[18px] font-bold">{customer.name}</div>
            <div>{customer.company}</div>
            <div className="flex gap-2">
              {new Array(customer.star).fill(0).map((_, index) => (
                <img
                  src="/static/img/icons/star-blue-fill.svg"
                  alt="star"
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerQuotesSection;
