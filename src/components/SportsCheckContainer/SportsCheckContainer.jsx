import React from "react";
import SportsCheckItemWhite from "../SportsCheckItemWhite/SportsCheckItemWhite";
import SportsCheckSubItemWhite from "../SportsCheckSubItemWhite/SportsCheckSubItemWhite";
import "./_sportsCheckContainer.scss";

const SportsCheckContainer = () => {
  const [viewItem, setViewItem] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <div className="Check-Menu-Container">
        <SportsCheckItemWhite
          txt={"NBA"}
          id={1}
          setChecked={setChecked}
          setViewItem={setViewItem}
          checked={checked}
        />
        <SportsCheckItemWhite
          txt={"NBA"}
          id={2}
          setChecked={setChecked}
          setViewItem={setViewItem}
          checked={checked}
        />
        <SportsCheckItemWhite
          txt={"NBA"}
          id={3}
          setChecked={setChecked}
          setViewItem={setViewItem}
          checked={checked}
        />
        {checked && viewItem === 3 ? (
          <>
            <SportsCheckSubItemWhite txt={"NBA"} />
            <SportsCheckSubItemWhite txt={"NBA"} />
            <SportsCheckSubItemWhite txt={"NBA"} />
          </>
        ) : (
          <></>
        )}
        <SportsCheckItemWhite
          txt={"NBA"}
          id={4}
          setChecked={setChecked}
          setViewItem={setViewItem}
          checked={checked}
        />
        <SportsCheckItemWhite
          txt={"NBA"}
          id={5}
          setChecked={setChecked}
          setViewItem={setViewItem}
          checked={checked}
        />
      </div>
    </>
  );
};

export default SportsCheckContainer;
