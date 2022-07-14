import React from "react";
import "./_shortcuts.scss";
import Cards from "../../assets/Cards.svg";
import chip from "../../assets/Chip.svg";
import horseshoe from "../../assets/Horseshoe.svg";
import plus from "../../assets/Plus.svg";
import sportball from "../../assets/SportBall.svg";
import youtubelive from "../../assets/Youtube-Live.svg";

const shortcuts = ({ setView }) => {
  return (
    <div className="Shortcuts">
      <div className="shorcut-item">
        <img className="shorcut-img" src={sportball} alt="" />
        <div className="shorcut-item-text" onClick={() => setView("Home")}>
          <span> Sports </span>
        </div>
      </div>
      <div className="shorcut-item">
        <img className="shorcut-img" src={youtubelive} alt="" />
        <div className="shorcut-item-text" onClick={() => setView("Sports")}>
          <span> Live Sports </span>
        </div>
      </div>
      <div className="shorcut-item">
        <img className="shorcut-img" src={chip} alt="" />
        <div className="shorcut-item-text">
          <span> Casino </span>
        </div>
      </div>
      <div className="shorcut-item">
        <img className="shorcut-img" src={Cards} alt="" />
        <div className="shorcut-item-text">
          <span> Live Casino </span>
        </div>
      </div>
      <div className="shorcut-item">
        <img className="shorcut-img" src={horseshoe} alt="" />
        <div className="shorcut-item-text">
          <span> Horses </span>
        </div>
      </div>
      <div className="shorcut-item">
        <img className="shorcut-img" src={plus} alt="" />
        <div className="shorcut-item-text-last">
          <span> Props </span>
        </div>
      </div>
    </div>
  );
};

export default shortcuts;
