import React from "react";


function PaymentCard({  icon, title, description }) {
  return (
    <div className={`flex flex-col items-center md:items-start justify-center md:justify-start `}>
      <div className="w-16 h-16 bg-[#66D097] rounded-md my-2 mb-5">
        <img
          className="w-full h-full object-cover"
          src={icon}
          alt={`${title}`}
        />
      </div>

      <h2 className="text-2xl my-2"> { title } </h2>
      <p className="text-center md:text-start">{ description }</p>
    </div>
  );
}

export default PaymentCard;
