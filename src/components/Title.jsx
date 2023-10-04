import React, { useEffect, useState } from "react";

function Title({ title, className }) {

  const [animate, setAnimate] = useState(false);
 
  // on initial Loading....
  useEffect(() => {
      setTimeout(() => {
        setAnimate(true);
      }, 100);
  }, []);

  // Animating on scrolling ...
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerOffset = 2; // Adjust this offset as needed

      // Check if the user has scrolled past the trigger point
      if (scrollY > triggerOffset) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
