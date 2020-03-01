import React from "react";
const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div сlassName="col-md-6">{left}</div>
      <div сlassName="col-md-6">{right}</div>
    </div>
  );
};
export default Row;
