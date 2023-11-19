import React from "react";
import AppeleIcon from "../assets/appeleIcon.png";
const PrimaryBtn = ({ title }) => {
  return (
    <button className="primaryBtn mx-auto flex items-center capitalize font-medium text-[18px] text-whiteColor px-4 py-2 rounded-[40px] leading-[24px]">
      <div>
        <img src={AppeleIcon} alt="AppeleIcon" />
      </div>
      {title}
    </button>
  );
};
export default PrimaryBtn;
