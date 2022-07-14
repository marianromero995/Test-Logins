import React from "react";
import "./_sportsCheckItemWhite.scss";

const SportsCheckItemWhite = ({ txt, id = "", setChecked, setViewItem, checked }) => {
  return (
    <div className="Check-Menu-Item-White">
      <label className="checkbox-container">
        <input
          type="checkbox"
          id={id}
          onClick={() => {
            setChecked(!checked);
            setViewItem(id);
          }}
        />
        <span className="checkmark"/>
        <span className="check-text"> {txt}</span>
      </label>
    </div>
  );
};

export default SportsCheckItemWhite;
