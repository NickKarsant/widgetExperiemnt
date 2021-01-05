import React from "react";
import Campcard from "./Campcard";

const Camplist = ({ camps }) => {

  const renderedCamps = camps.map(camp => {
    return (
      <Campcard
        key={camp._id}
        camp={camp}
      />
    );
  });

  return <div className="ui grid container" style={{display: "flex", justifyContent: "space-around"}}>{renderedCamps}</div>;
};

export default Camplist;
