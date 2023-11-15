import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

type Props = {
  category: string;
  title: string;
  image: string;
  link: string;
  summary: string;
  userImage: string;
  userName: string;
  userDate: string;
};

const BlogComponent = ({
  category,
  title,
  image,
  link,
  summary,
  userImage,
  userName,
  userDate,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-4 h-full">
      <div className="aspect-[1.6] flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={image}
          alt={`blog ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-[14px] font-semibold text-primary">{category}</div>

      <div className="flex gap-3 items-center">
        <div className="overflow-ellipsis overflow-hidden whitespace-nowrap text-[24px] font-semibold grow">
          {title}
        </div>
        <div>
          <a href={link} target="_blank" rel="noreferrer">
            <HiMiniArrowUpRight color="white" fontSize={28} />
          </a>
        </div>
      </div>
      <div>{summary}</div>
      <div className="mt-auto flex gap-4">
        <div>
          <img
            src={userImage}
            alt={`user ${userName}`}
            className="block h-10 w-10 rounded-full overflow-hidden"
          />
        </div>
        <div>
          <div className="text-[14px] font-semibold">{userName}</div>
          <div className="text-[14px]">{userDate}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
