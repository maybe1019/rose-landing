import React from "react";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import LandingFooter from "../../components/LandingFooter/LandingFooter";
import { BlogMockData } from "./data";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import BlogSubscribeComponent from "../../components/BlogSubscribeComponent/BlogSubscribeComponent";

const BlogPage = () => {
  return (
    <div>
      <LandingHeader />

      <main className="my-52 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-primary text-center font-bold">Our blog</div>
          <div className="text-[48px] md:text-[64px] font-semibold text-center my-4">
            The latest writings from our team
          </div>
          <div className="text-[20px] md:text-[24px] text-center">
            The latest industry news, interviews, technologies, and resources.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-16">
            {BlogMockData.map((blog, index) => (
              <>
                <div key={index}>{<BlogComponent {...blog} />}</div>
                {index === 2 && (
                  <div key={-1}>{<BlogSubscribeComponent />}</div>
                )}
              </>
            ))}
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
};

export default BlogPage;
