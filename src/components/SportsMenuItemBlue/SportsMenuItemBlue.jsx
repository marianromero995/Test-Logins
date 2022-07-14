import React from "react";
import "./_sportsMenuItemBlue.scss";
import defaultImg from "../../assets/default-img.png";

const SportsMenuItemBlue = ({ txt, onClick = () => {}, img }) => {
  return (
    <div className="Sports-Menu-Item" onClick={(value) => onClick(value)}>
      <div className="Img-icon">
        <img src={img || defaultImg} alt="" />
      </div>
      <div className="Sport-text">
        <span className="text"> {txt}</span>
      </div>
    </div>
  );
};

export default SportsMenuItemBlue;
