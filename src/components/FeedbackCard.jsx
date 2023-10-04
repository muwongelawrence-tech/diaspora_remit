import React from "react";

function FeedbackCard({ testimonial, name, designation, company, image }) {
  return (
    <div
      className={` bg-[#EEFFFA]  mr-5  w-full md:max-w-[360px] py-8 px-6 rounded-2xl inline-block  shadow-xl `}
    >
      <div className="flex flex-col py-2 px-3 pt-4 h-full">
        <div className="flex-1">
          <h4 className="text-4xl uppercase font-semibold">"</h4>

          <p className="text-base text-gray-500 whitespace-normal font-medium mt-2 line-clamp-3">
            {testimonial}
          </p>
        </div>
      </div>

      <div className="mt-1">
        <div className="mt-7 flex justify-between space-x-3 items-center gap-1">
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 flex flex-col">
            <p className="text-[#07142b] font-medium text-[16px]">
              <span className="text-[#f2a908]">@</span> {name}
            </p>

            <p className="mt-1 text-secondary text-[12px]">
              {designation} {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
