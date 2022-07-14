import React from "react";
import defaultImg from "../../assets/default-img.png";
import "./_bettingBoxTableImage.scss";

const BettingBoxTableHeader = () => {
  return (
    <div className="Header">
      <div className="Img-icon">
        <img src={defaultImg} alt="" />
      </div>
      <div className="Title">
        <span>MIAMI DOLFINS</span>
      </div>
      <div className="Options">
        <div className="Text">
          <span>251</span>
          <i className="fas fa-tv"></i>
          <span>CBS</span>
        </div>
        <div className="left-item">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default BettingBoxTableHeader;
