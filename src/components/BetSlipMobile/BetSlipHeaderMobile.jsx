import React from "react";
import "./_betSlipMobile.scss";

const BetSlipHeaderMobile = ({ setContentVisible }) => {
  return (
    <div className="BetSlip-Mobile">
      <div className="header-mobile" onClick={(value) => setContentVisible(value)}>
        <hr className="mobile-line" />
        <div className="amount-container">
          <span> 2</span>
        </div>
        <div className="title">
          <span>BET SLIP</span>
        </div>
      </div>
      <div className="top-header">
        <span>Bet added to the bet slip</span>
      </div>
    </div>
  );
};

export default BetSlipHeaderMobile;
