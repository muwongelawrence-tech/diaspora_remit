import React, { useEffect, useState } from "react";

function Title({ title, className }) {

  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Apply the animation class after a short delay to ensure it triggers on load
    const timer = setTimeout(() => {
      setAnimationClass('animate-slide-up');
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full flex items-center justify-center">
      <p
        className={`text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-center ${
          className ? className : "text-[#161616]"
        } ${animationClass} `}
      >
        {title}
      </p>
    </div>
  );
}

export default Title;
