import React from "react";

const Card = ({ img, title, parag }) => {
  return (
    <div className="p-4">
      <img src={img} alt={title} />
      <h4 className="my-6 capitalize font-bold text-[22px] leading-[44px]">
        {title}
      </h4>
      <p className="first-letter:capitalize text-darkBlue/50 font-medium text-[16px] leading-[32px]">
        {parag}
      </p>
    </div>
  );
};

export default Card;
