import React from "react";
import Title from "./Title";
import PaymentCard from "./PaymentCard";
import TransactionCard from "./TransactionCard";

function Payments() {
  const payments = [
    {
      id: 1,
      icon: "/images/payment.png",
      title: "Seamless Payment ",
      description:
        "The app supports various  payments methods, including credit cards. ",
    },
    {
      id: 2,
      icon: "/images/payment.png",
      title: "Multiple Payment",
      description:
        "The app supports various  payments methods, including credit cards.",
    },
    {
      id: 3,
      icon: "/images/payment.png",
      title: "International Payment",
      description:
        "The app supports various  payments methods, including credit cards.",
    },
  ];

  const transactions = [
    {
      id: 1,
      icon: "/images/payment.png",
      title: "Seamless Payment ",
      description:
        "The app supports various  payments methods, including credit cards. ",
    },
    {
      id: 2,
      icon: "/images/payment.png",
      title: "Multiple Payment",
      description:
        "The app supports various  payments methods, including credit cards.",
    },
    {
      id: 3,
      icon: "/images/payment.png",
      title: "International Payment",
      description:
        "The app supports various  payments methods, including credit cards.",
    },
  ];

  return (
    <div className="w-full">

      <Title title={"Reliable And Efficient Payment Services"} />

      <div className="flex flex-col md:flex-row items-center w-full py-2 px-3 mt-3">
        <div className="w-full md:max-w-sm">
          {payments.map(({ id, icon, title, description }) => (
            <PaymentCard
              key={id}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>

        <div className="flex-1 h-[600px] md:hidden lg:inline-flex">
          <img
            className="object-contain w-full h-full"
            src="images/DPHONE FRONT.png"
            alt="Banner"
          />
        </div>

        <div className="w-full md:max-w-sm">
          {transactions.map(({ id, icon, title, description }) => (
            <TransactionCard
              key={id}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Payments;
