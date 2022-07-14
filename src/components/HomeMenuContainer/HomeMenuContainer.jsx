import React from "react";
import "./_homemenuContainer.scss";
import HomeMenuItem from "../HomeMenuItem/HomeMenuItem";
import Vector from "../../assets/vector.svg";

const _HomeMenuContainer = ({ txt }) => {
  const [viewMenu, setViewMenu] = React.useState(true);
  return (
    <>
      <div className="Home-Menu-StraightBet-Container">
        <span>Straight Bet</span>
        <div className="down-arrow-icon" onClick={() => setViewMenu(!viewMenu)}>
        <img src={Vector} alt="" />
        </div>
      </div>
      {viewMenu ? (
        <div className="Home-Menu-Container">
          <HomeMenuItem txt="Straight" />
          <HomeMenuItem txt="Parlay" />
          <HomeMenuItem txt="Teaser" />
          <HomeMenuItem txt="If Bet" />
          <HomeMenuItem txt="Reverse" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default _HomeMenuContainer;
