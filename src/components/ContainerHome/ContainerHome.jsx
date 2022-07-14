import React from "react";
import "./_containerHome.scss";
import YellowContinueButton from "../YellowButton/YellowContinueButton";
import HomeMenuContainer from "../HomeMenuContainer/HomeMenuContainer";
import SportsMenuItemBlue from "../SportsMenuItemBlue/SportsMenuItemBlue";
import SportsCheckContainer from "../SportsCheckContainer/SportsCheckContainer";
import Golf from "../../assets/Golf.png";
import Basketball from "../../assets/Basketball.png";
import Fighting from "../../assets/Fighting.png";
import Hockey from "../../assets/Hockey.png";
import Soccer from "../../assets/Soccer.png";
import Tennis from "../../assets/Tennis.png";

const ContainerHome = () => {
  const [viewMenu, setViewMenu] = React.useState(true);
  return (
    <div className="Container-home">
      <div className="Container-bets">
        <div className="Container-home-menu">
          <HomeMenuContainer />
        </div>
        <div className="Container-sports-menu">
          <div className="Container-sports-menu-row">
            <div className="Container-sports-menu-item">
              <SportsMenuItemBlue
                txt={"Football"}
                onClick={() =>
                  viewMenu !== 1 ? setViewMenu(1) : setViewMenu(null)
                }
                img={Soccer}
              />
              {viewMenu === 1 ? <SportsCheckContainer /> : <></>}
            </div>
            <div className="Container-sports-menu-item">
              <SportsMenuItemBlue
                txt={"Basketball"}
                onClick={() =>
                  viewMenu !== 2 ? setViewMenu(2) : setViewMenu(null)
                }
                img={Basketball}
              />
              {viewMenu === 2 ? <SportsCheckContainer /> : <></>}
            </div>
          </div>
          <div className="Container-sports-menu-row">
            <div className="Container-sports-menu-item">
              <SportsMenuItemBlue
                txt={"Hockey"}
                onClick={() =>
                  viewMenu !== 3 ? setViewMenu(3) : setViewMenu(null)
                }
                img={Hockey}
              />
              {viewMenu === 3 ? <SportsCheckContainer /> : <></>}
            </div>
            <div className="Container-sports-menu-item">
              <SportsMenuItemBlue
                txt={"Fighting"}
                onClick={() =>
                  viewMenu !== 4 ? setViewMenu(4) : setViewMenu(null)
                }
                img={Fighting}
              />
              {viewMenu === 4 ? <SportsCheckContainer /> : <></>}
            </div>
          </div>
          <div className="Container-sports-menu-row">
            <div className="Container-sports-menu-item">
              <SportsMenuItemBlue
                txt={"Major Soccer"}
                onClick={() =>
                  viewMenu !== 5 ? setViewMenu(5) : setViewMenu(null)
                }
                img={Soccer}
              />
              {viewMenu === 5 ? <SportsCheckContainer /> : <></>}
            </div>
            <div className="Container-sports-menu-item">
              <SportsMenuItemBlue
                txt={"Minor Soccer"}
                onClick={() =>
                  viewMenu !== 6 ? setViewMenu(6) : setViewMenu(null)
                }
                img={Soccer}
              />
              {viewMenu === 6 ? <SportsCheckContainer /> : <></>}
            </div>
          </div>
          <div className="Container-sports-menu-row">
            <div className="Container-sports-menu-item">
              <SportsMenuItemBlue
                txt={"Tennis"}
                onClick={() =>
                  viewMenu !== 7 ? setViewMenu(7) : setViewMenu(null)
                }
                img={Tennis}
              />
              {viewMenu === 7 ? <SportsCheckContainer /> : <></>}
            </div>
            <div className="Container-sports-menu-item">
              <SportsMenuItemBlue
                txt={"Golf"}
                onClick={() =>
                  viewMenu !== 8 ? setViewMenu(8) : setViewMenu(null)
                }
                img={Golf}
              />
              {viewMenu === 8 ? <SportsCheckContainer /> : <></>}
            </div>
          </div>
        </div>
      </div>
      <div className="Container-button">
        <YellowContinueButton />
      </div>
    </div>
  );
};

export default ContainerHome;
