import React from "react";
import Title from "./Title";
import BlogCard from "./BlogCard";

function Blogs() {
  const blogs = [
    {
      id: 1,
      imageUrl: "images/blog1.jpg",
      title: "The Role of Payment Gateway Apps in E-Commerce Success",
      category: "News",
      description:
        "Graduation is coming up and you still don’t have a job? Many students wait until they graduate to start looking for a job.",
    },
    {
      id: 2,
      imageUrl: "images/blog2.png",
      title: "Unlocking Secure Payments With a Payment Gateway",
      category: "Tips & Trick",
      description:
        "Tired of the broke college student stereotype? Well, these days, in the glorious age of the internet… your options for making money are practically endless",
    },
    {
      id: 3,
      imageUrl: "images/blog3.jpg",
      title: "The Evolution of Payment Gateway Apps Innovations",
      category: "Insight",
      description:
        "With a new school year here, now’s the perfect time to get serious about searching for and winning scholarships to pay for college! Since many.",
    },
    // Add more blog objects as needed
  ];
  return (
    <div className="w-full my-5 ">
      <Title title={"Our Latest Blog & Articles"} />

      <div className="flex items-center justify-center w-full">
        <div className="mt-10 py-4 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
          { blogs.map(({ id, imageUrl, title, description, category }) => (
            <BlogCard
              key={id}
              imageUrl={imageUrl}
              title={title}
              category = { category }
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
