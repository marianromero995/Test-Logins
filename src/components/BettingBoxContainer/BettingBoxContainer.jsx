import React from "react";
import "./_bettingBoxContainer.scss";
import BettingBoxTopHeader from "../BettingBoxTopHeader/BettingBoxTopHeader";
import BettingBoxTable1Image from "../BettingBoxTableImage/BettingBoxTable1Image";
import BettingBoxOrangeLine from "../BettingBoxOrangeLine/BettingBoxOrangeLine";
import BettingBoxTable2Image from "../BettingBoxTableImage/BettingBoxTable2Image";
import BettingBoxTable3Image from "../BettingBoxTableImage/BettingBoxTable3Image";
import BettingBoxTable4Image from "../BettingBoxTableImage/BettingBoxTable4Image";
import BettingBoxDownHeader from "../BettingBoxDownHeader /BettingBoxDownHeader";
import BettingBoxTable5items2rowsInResponsive from "../BettingBoxTableImage/BettingBoxTable5items2rowsInResponsive";



const BettingBoxContainer = ({ txt }) => {
  return (
    <div className="Betting-Box-Container">
      <BettingBoxTopHeader />
      <BettingBoxDownHeader />
      <BettingBoxTable5items2rowsInResponsive />
      <BettingBoxTable5items2rowsInResponsive />
      <BettingBoxOrangeLine />
      <BettingBoxTable2Image />
      <BettingBoxTable2Image />
      <BettingBoxOrangeLine />
      <BettingBoxTable3Image />
      <BettingBoxTable4Image />
      <BettingBoxOrangeLine />
      <BettingBoxTable1Image />
      <BettingBoxTable1Image />
    </div>
  );
};

export default BettingBoxContainer;
