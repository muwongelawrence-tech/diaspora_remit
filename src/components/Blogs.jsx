import React from "react";
import Title from "./Title";
import BlogCard from "./BlogCard";

function Blogs() {
  const blogs = [
    {
      id: 1,
      imageUrl: "images/blog1.jpg",
      title: "The Role of Payment Gateway Apps in E-Commerce Success",
      description:
        "Vivamus elementum semper aenean. Consequat eleifend tellus. Aenean leo ligula, porttitor  Vivamus elementum semper aenean. Consequat eleifend tellus. Aenean leo ligula, porttitor",
    },
    {
      id: 2,
      imageUrl: "images/blog2.png",
      title: "Unlocking Secure Payments With a Payment Gateway",
      description:
        "Vivamus elementum semper aenean. Consequat eleifend tellus. Aenean leo ligula, porttitor  Vivamus elementum semper aenean. Consequat eleifend tellus. Aenean leo ligula, porttitor",
    },
    {
      id: 3,
      imageUrl: "images/blog3.jpg",
      title: "The Evolution of Payment Gateway Apps Innovations",
      description:
        "Vivamus elementum semper aenean. Consequat eleifend tellus. Aenean leo ligula, porttitor  Vivamus elementum semper aenean. Consequat eleifend tellus. Aenean leo ligula, porttitor",
    },
    // Add more blog objects as needed
  ];
  return (
    <div className="w-full my-5 ">
      <Title title={"Our Latest Blog & Articles"} />

      <div className="flex items-center justify-center w-full">
        <div className="mt-10 py-4 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
          { blogs.map(({ id, imageUrl, title, description }) => (
            <BlogCard
              key={id}
              imageUrl={imageUrl}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
