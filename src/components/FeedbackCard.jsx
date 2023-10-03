import React from "react";

function FeedbackCard({ testimonial, name, designation, company, image }) {
  return (
    <div className="bg-[#EEFFFA] my-3 py-8 px-6 rounded-2xl inline-block w-full md:w-96 mr-4">
      <div className="w-full">
        <p className="text-[#07142b] font-bold text-[48px]">"</p>
        <p className="text-[#07142b]  text-left  line-clamp-3 max-w-full">{testimonial}</p>
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
