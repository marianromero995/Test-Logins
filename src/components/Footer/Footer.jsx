import React from "react";
import "./_footer.scss";
import logo from "../../assets/8PLAYS-logo.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Logo">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="footer-text">
        Need Help?
        <br />
        Phone: 1 888 364 2379 | Mail: cs@bet2win.ag
      </div>
    </div>
  );
};

export default Footer;
