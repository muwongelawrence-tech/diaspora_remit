import React from "react";
import DiaporaImageLoader from "./DiaporaImageLoader";

function BlogCard({ imageUrl, title, description }) {
  return (
    <div
      className={`flex flex-col  h-[400px] max-w-[350px] pb-5 rounded-lg shadow-xl overflow-hidden`}
    >
      <div
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "14rem",
          cursor: "pointer",
        }}
        className="relative"
      >
        <DiaporaImageLoader src={imageUrl} alt={"Blog-Image"} />
        <div className="absolute top-0 w-full h-full cursor-pointer  bg-black bg-opacity-25 hover:bg-opacity-50 transition-all duration-300" />
      </div>

      <div className="flex flex-col py-2 px-3 pt-4 h-full">
        <div className="flex-1">
          <h4 className="text-base uppercase font-semibold">{title}</h4>

          <p className="text-base text-gray-500 font-medium mt-5 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
