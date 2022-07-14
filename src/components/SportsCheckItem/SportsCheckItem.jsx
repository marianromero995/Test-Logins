import React from "react";
import "./_sportsCheckItem.scss";

const SportsCheckItem = ({ txt }) => {
  return (
    <div className="Check-Menu-Item">
      <label className="checkbox-container">
        <input type="checkbox" id="cbox1" />
        <span className="checkmark">
          <i id="js-sportsel-11p1" className="fas fa-check"></i>
        </span>
        <span className="check-text"> {txt}</span>
      </label>
    </div>
  );
};

export default SportsCheckItem;
