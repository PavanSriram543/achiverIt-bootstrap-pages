import React from "react";
import "./topCards.css";

const TopCard = ({ c1, c2, p1, p2 }) => {
  return (
    <div className="col-md-3 pb-10">
      <div className={`${c1 ? "c1" : "c2"} bx-shadow p-4 topcard`}>
        <p className="h2 text-blue">{p1}</p>
        <p className="h6 f-14 pt-2 text-gray">{p2}</p>
      </div>
    </div>
  );
};

export default TopCard;
