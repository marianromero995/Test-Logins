import React from "react";
import "./_bettingBoxTableImage.scss";
import BettingBoxTableHeader from "./BettingBoxTableHeader";

const BettingBoxTable3Image = () => {
  return (
    <div className="Betting-Box-Table-I-Container">
      <BettingBoxTableHeader />
      <div className="Table">
        <div className="table-column">
          <div className="table-header">
            <span>SPEAD</span>
          </div>
          <div className="table-content">
            <span>00000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingBoxTable3Image;
