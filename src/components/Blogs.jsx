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
        "In the fast-evolving world of e-commerce, the significance of payment gateway apps cannot be overstated. These digital gateways serve as the vital link between online businesses and their customers, playing a pivotal role in shaping the success of e-commerce ventures.",
    },
    {
      id: 2,
      imageUrl: "images/blog2.png",
      title: "Unlocking Secure Payments With a Payment Gateway",
      category: "Tips & Trick",
      description:
        "In the era of digital transactions, unlocking secure payments is a mission critical to the success of businesses and the peace of mind of consumers. At the heart of this security landscape lies the indispensable role of a payment gateway. This blog embarks on a journey to explore how payment gateways serve as the key to ensuring that financial transactions are not only convenient but, more importantly, secure.",
    },
    {
      id: 3,
      imageUrl: "images/blog3.jpg",
      title: "The Evolution of Payment Gateway Apps Innovations",
      category: "Insight",
      description: "Embarking on a journey through time, we explore the dynamic landscape of payment gateway apps and the transformative innovations that have shaped their evolution. From humble beginnings to cutting-edge advancements, this blog delves into the fascinating story of how payment gateway apps have adapted, innovated, and revolutionized the way we conduct financial transactions.",
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
