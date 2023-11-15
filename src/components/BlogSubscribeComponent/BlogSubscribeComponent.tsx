import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

const BlogSubscribeComponent = () => {
  return (
    <div className="flex flex-col p-6 justify-center gap-5 rounded-xl border-[1px] border-[rgba(255,255,255,0.05)] h-full">
      <div className="bg-white w-14 h-14 flex items-center justify-center rounded-xl">
        <IoPaperPlaneOutline color="#344054" fontSize={28} />
      </div>
      <div className="text-[24px] font-semibold">Weekly newsletter</div>
      <div>
        No spam. Just the latest releases and tips, interesting articles, and
        exclusive interviews in your inbox every week.
      </div>
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        className="outline-none border-[1px] border-[rgba(255,255,255,0.05)] py-3 px-4 bg-transparent rounded-lg"
      />
      <button className="w-full bg-primary rounded-3xl py-3 font-bold">Subscribe</button>
    </div>
  );
};

export default BlogSubscribeComponent;
