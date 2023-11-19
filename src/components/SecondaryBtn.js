import React from "react";

const SecondaryBtn = ({ title }) => {
  return (
    <button className="capitalize font-medium text-[18px] text-whiteColor/60 border border-whiteColor/10 px-4 py-2 rounded-[32px] hover:text-whiteColor hover:border-whiteColor duration-300 ease-in">
      {title}
    </button>
  );
};

export default SecondaryBtn;
