import React from "react";
import Title from "./Title";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import FeedbackCard from "./FeedbackCard";

function FeedBack() {
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Mugume atwine",
      designation: "Data scientist",
      company: "ACE",
      image: "/images/atwine.jpeg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chambaga Abdul",
      designation: "Software Developer",
      company: "clinic masters",
      image: "/images/abdul.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Enoch hall Asanda",
      designation: "Mlops Engineer",
      company: "ACE",
      image: "/images/hall.jpeg",
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="bg-[#07142b] py-2 px-3">
      <Title className="text-gray-100" title={"Client Feedback and Reviews"} />

      <div className="mt-12 rounded-[20px]">
        <div className={` bg-[#0a2244] rounded-2xl h-[200px]`}>
          <div className="flex flex-col items-center justify-center pt-10">
            <p className="text-2xl text-gray-200">What others say</p>

            <h2 className="text-2xl text-gray-200">Testimonials.</h2>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-3 p-2 -mt-20 ">
          <div
            onClick={slideLeft}
            className="bg-[#0a2244] rounded-full p-1 cursor-pointer hidden md:inline-flex"
          >
            <HiChevronLeft className="h-10 w-10 text-white" />
          </div>

          {/* Slider */}

          <div
            id="slider"
            className="w-full p-3  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-3"
          >
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>

          <div
            onClick={slideRight}
            className="bg-[#0a2244] rounded-full p-1 cursor-pointer hidden md:inline-flex "
          >
            <HiChevronRight className="h-10 w-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
