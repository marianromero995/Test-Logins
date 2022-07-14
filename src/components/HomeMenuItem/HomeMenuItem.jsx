import React from "react";
import "./_homemenuItem.scss";

const homeMenuItem = ({ txt }) => {
  return (
    <div className="Home-Menu-Item">
      <span>{txt}</span>
    </div>
  );
};

export default homeMenuItem;
