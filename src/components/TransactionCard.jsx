import React from 'react'

function TransactionCard({ icon, title, description }) {
  return (
    <div className={`flex flex-col items-center md:items-end justify-center md:justify-end `}>
    <div className="w-16 h-16  bg-[#f2a908] rounded-md my-2 mb-5">
      <img
        className="w-full h-full object-cover"
        src={icon}
        alt={`${title}`}
      />
    </div>

    <h2 className="text-2xl my-2 text-[#07142b]"> { title } </h2>
    <p className="text-center md:text-end text-[#07142b]">{ description }</p>
  </div>
  )
}

export default TransactionCard;
