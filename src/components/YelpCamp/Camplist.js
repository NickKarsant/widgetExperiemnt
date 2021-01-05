import React from "react";
import Campcard from "./Campcard";

const Camplist = ({ camps }) => {

  console.log(camps)
  const renderedCamps = camps.map(camp => {
    return (
      <Campcard
        key={camp.id}
        camp={camp}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedCamps}</div>;
};

export default Camplist;
