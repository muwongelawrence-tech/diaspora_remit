import React, { useEffect, useState } from "react";

function Title({ title, className }) {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        setAnimate(true);
      }, 100);
  }, []);

  return (
    <div
      className={`w-full flex items-center justify-center ${
        animate ? "animate" : ""
      }`}
    >
      <p
        className={`text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-center ${
          className ? className : "text-[#161616]"
        } transform translate-y-4 transition-transform duration-1000 ease-in-out`}
      >
        { title } 
      </p>
    </div>
  );
}

export default Title;
