import React from 'react'

function Title({ title }) {
  return (
    <div className="w-full flex items-center justify-center">
        <p className="text-2xl md:text-5xl font-bold max-w-xs md:max-w-2xl text-center text-[#161616]">{title}</p>
      </div>
  );
}

export default Title;
