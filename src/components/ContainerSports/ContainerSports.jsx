import React from "react";
import "./_containerSports.scss";
import BetSlip from "../BetSlip/BetSlip";
import BettingBoxContainer from "../BettingBoxContainer/BettingBoxContainer";
import BetSlipContentMobile from "../BetSlipMobile/BetSlipContentMobile";
import BetSlipHeaderMobile from "../BetSlipMobile/BetSlipHeaderMobile";

const ContainerSports = () => {
  const [contentVisible, setContentVisible] = React.useState(true);
  const mobile = window.innerWidth < 900;
  return (
    <div className="Container-sports">
      <div className="Container-betting-box">
        <BettingBoxContainer />
      </div>
      <div className="Container-BetSlip">
        {mobile ? (
          contentVisible ? (
            <>
              <div className="BetSlip-mobile-content" >
                <BetSlipHeaderMobile
                  setContentVisible={() => setContentVisible(!contentVisible)}
                />
                <BetSlipContentMobile />
              </div>
            </>
          ) : (
            <div className="BetSlip-mobile-no-content">
              <BetSlipHeaderMobile
                setContentVisible={() => setContentVisible(!contentVisible)}
              />
            </div>
          )
        ) : (
          <div className="desktop">
            <BetSlip />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerSports;
