import React from "react";
import "./_betSlip.scss";

const BetSlip = ({ setVisible }) => {
  return (
    <div className="BetSlip">
      <div className="header" onClick={(value) => setVisible(value)}>
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
      <div className="content">
        <div className="contain-header">
          <div className="contain-lft">
            <span> MIAMI DOLFINS</span>
          </div>
          <div className="contain-rgt">
            <span> BET ##</span>
          </div>
        </div>
        <div className="lft-text">
          Point Spread / Game / Limit $200
          <br /> Atlanta Falcons at New York Giants
          <br /> Thursday, September 16 / 5:20PM
        </div>
        <div className="lft-dropdown">
          <div className="dropdown-container">
            <span>Default points: +3 - 115</span>
            <div className="down-arrow-icon">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="risk-win">
          <div className="lft-contain">
            <div className="lft">
              <span>Risk</span>
            </div>
            <div className="rgt">
              <span>$ 0.00</span>
            </div>
          </div>
          <div className="rgt-contain">
            <div className="lft">
              <span>Win</span>
            </div>
            <div className="rgt">
              <input
                className="base-input"
                placeholder="$ 0.00"
                type="number"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="base-bet-all">
          <div className="lft-contain">
            <div className="lft">
              <span>Base</span>
            </div>
            <div className="rgt">
              <input
                className="base-input"
                placeholder="$ 0.00"
                type="number"
              />
            </div>
          </div>
          <div className="rgt-contain">
            <button className="bet-button">Bet it all</button>
          </div>
        </div>
        <hr />
        <div className="bets-table">
          <div className="bets-table-rows">
            <div className="lft-text">Total Bets</div>
            <div className="rgt-text">2</div>
          </div>
          <div className="bets-table-rows">
            <div className="lft-text">Total Bets</div>
            <div className="rgt-text">$ 0.00</div>
          </div>
          <div className="bets-table-rows">
            <div className="lft-text">Total Bets</div>
            <div className="rgt-text">$ 0.00</div>
          </div>
        </div>
        <hr />
        <div className="enter-password-container">
          <input
            className="password-input"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="confirm-password-container">
          <button className="password-button">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
