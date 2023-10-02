import React from 'react'

function Title({ title }) {
  return (
    <div className="w-full flex items-center justify-center">
        <p className="text-2xl md:text-6xl font-bold max-w-xs md:max-w-2xl text-center">{title}</p>
      </div>
  );
}

export default Title;
