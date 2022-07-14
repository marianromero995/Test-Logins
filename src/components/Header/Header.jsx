import React from "react";
import "./_header.scss";
import logo from "../../assets/8PLAYS-logo.svg";
import avatar from "../../assets/avatar.svg";
import Notification from "../../assets/Notification.svg";
import Message from "../../assets/Message.svg";
import BurgerMenu from "../../assets/Burger-Menu.svg";
import Vector from "../../assets/vector.svg";

const Header = ({ setBurgerMenu, setUserMenu, setView }) => {
  const [notificationEnvelope, setNotificationEnvelope] = React.useState(false);
  const [notificationBell, setNotificationBell] = React.useState(false);
  return (
    <div className="Header">
      <div className="lft">
        <div className="burger-icon" onClick={(value) => setBurgerMenu(value)}>
          <img className="BurgerMenu" src={BurgerMenu} alt="" />
        </div>
      </div>
      <div className="center">
        <img
          className="logo"
          src={logo}
          alt=""
          onClick={() => setView("Landing")}
        />
      </div>
      <div className="rgt">
        <div
          className="notification-icon"
          onClick={() => setNotificationBell(!notificationBell)}
        >
          <img className="bell" src={Notification} alt="" />
          {notificationBell ? (
            <div className="notification-icon-number">
              <span> 100</span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div
          className="envelope-icon"
          onClick={() => setNotificationEnvelope(!notificationEnvelope)}
        >
          <img className="envelope" src={Message} alt="" />
          {notificationEnvelope ? (
            <div className="notification-icon-number-envelope">
              <span> 5</span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="user" onClick={(value) => setUserMenu(value)}>
          <div className="user-icon">
            <img src={avatar} alt="" />
            <div className="notification-icon-number-user">
              <span> 5</span>
            </div>
          </div>
          <div className="down-arrow-icon">
            <img src={Vector} alt="" className="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
