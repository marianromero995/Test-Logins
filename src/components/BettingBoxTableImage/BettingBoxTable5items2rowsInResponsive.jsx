import React from "react";
import BettingBoxTableHeader from "./BettingBoxTableHeader";
import "./_bettingBoxTable5items2rowsInResponsive.scss";

const BettingBoxTable5items2rowsInResponsive = () => {
  return (
    <div className="Betting-Box-Table-Container">
      <BettingBoxTableHeader />
      <div className="Table">
        <div className="row-3-items">
          <div className="table-column">
            <div className="table-header">
              <span>SPEAD</span>
            </div>
            <div className="table-content">
              <span>00000</span>
            </div>
          </div>
          <div className="table-column">
            <div className="table-header">
              <span>SPEAD</span>
            </div>
            <div className="table-content">
              <span>00000</span>
            </div>
          </div>
          <div className="table-column">
            <div className="table-header">
              <span>SPEAD</span>
            </div>
            <div className="table-content">
              <span>00000</span>
            </div>
          </div>
        </div>
        <div className="row-2-items">
          <div className="table-column">
            <div className="table-header">
              <span>SPEAD</span>
            </div>
            <div className="table-content">
              <span>00000</span>
            </div>
          </div>
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
    </div>
  );
};

export default BettingBoxTable5items2rowsInResponsive;
