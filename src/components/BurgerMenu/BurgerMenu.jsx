import React from "react";
import "./_burgermenu.scss";
import bookmark from "../../assets/bookmark.svg";

const shortcuts = () => {
  return (
    <div className="Burger-Menu">
      <div className="burger-menu-row">
        <div className="burger-menu-item">
          <img className="burger-menu-img" src={bookmark} alt="" />
          <div className="burger-menu-item-text">
            <span> Bet Sports </span>
          </div>
        </div>
      </div>
      <div className="burger-menu-row">
        <div className="burger-menu-item">
          <img className="burger-menu-img" src={bookmark} alt="" />
          <div className="burger-menu-item-text">
            <span> Casino </span>
          </div>
        </div>
      </div>
      <div className="burger-menu-row">
        <div className="burger-menu-item">
          <img className="burger-menu-img" src={bookmark} alt="" />
          <div className="burger-menu-item-text">
            <span> Horses </span>
          </div>
        </div>
      </div>
      <div className="burger-menu-row">
        <div className="burger-menu-item">
          <img className="burger-menu-img" src={bookmark} alt="" />
          <div className="burger-menu-item-text">
            <span> Live Sports </span>
          </div>
        </div>
      </div>
      <div className="burger-menu-row">
        <div className="burger-menu-item">
          <img className="burger-menu-img" src={bookmark} alt="" />
          <div className="burger-menu-item-text">
            <span> Sports Scores </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shortcuts;
