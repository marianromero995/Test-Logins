import React from "react";
import "./_userMenu.scss";
import arrow from "../../assets/Arrow-down.svg";
import bookmark from "../../assets/bookmark.svg";
import avatar from "../../assets/avatar.svg";

const shortcuts = () => {
  return (
    <div className="User-menu">
      <div className="User-menu-row">
        <div className="User-menu-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="User-menu-item-text">
          <span> USER </span>
        </div>
      </div>
      <div className="User-menu-row">
        <div className="User-menu-item">
          <div className="User-menu-item-text">
            <span> Additional info (email) </span>
          </div>
          <img className="User-menu-arrow" src={arrow} alt="" />
        </div>
      </div>
      <div className="User-menu-balance-row">
        <div className="User-menu-item">
          <div className="User-menu-item-text">
            <span> Balance </span>
            <span>$ 0.00</span>
          </div>
        </div>
        <div className="User-menu-item">
          <div className="User-menu-item-text">
            <span> Available </span>
            <span>$ 0.00</span>
          </div>
        </div>
        <div className="User-menu-item">
          <div className="User-menu-item-text">
            <span> Pending </span>
            <span>$ 0.00</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="User-menu-options-row">
        <div className="User-menu-option">
          <img className="User-menu-img" src={bookmark} alt="" />
          <div className="User-menu-item-text">
            <span> Account information </span>
          </div>
        </div>
      </div>
      <div className="User-menu-options-row">
        <div className="User-menu-option">
          <img className="User-menu-img" src={bookmark} alt="" />
          <div className="User-menu-item-text">
            <span> Account settings </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="User-menu-options-row">
        <div className="User-menu-option">
          <img className="User-menu-img" src={bookmark} alt="" />
          <div className="User-menu-item-text">
            <span> Pending Wagers </span>
          </div>
        </div>
      </div>
      <div className="User-menu-options-row">
        <div className="User-menu-option">
          <img className="User-menu-img" src={bookmark} alt="" />
          <div className="User-menu-item-text">
            <span> Transactions </span>
          </div>
        </div>
      </div>
      <div className="User-menu-options-row">
        <div className="User-menu-option">
          <img className="User-menu-img" src={bookmark} alt="" />
          <div className="User-menu-item-text">
            <span> Daily figures </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="User-menu-options-row">
        <div className="User-menu-option">
          <img className="User-menu-img" src={bookmark} alt="" />
          <div className="User-menu-item-text">
            <span> Rules </span>
          </div>
        </div>
      </div>
      <div className="User-menu-options-row">
        <div className="User-menu-option">
          <img className="User-menu-img" src={bookmark} alt="" />
          <div className="User-menu-item-text">
            <span> Log Out </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shortcuts;
