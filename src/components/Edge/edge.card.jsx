import React from "react";
import "./edge.css";

const EdgeCard = (props) => {
  return (
    <div className="col-md-3 col-6 text-center pb-10">
      <div className="edge p-4">
        <div className="pb-10">
          <i className={props.icon} />
        </div>
        <h6 className="f-12">Real Time Doubt Resolution</h6>
        <h6 className="f-12">With Live Instructors</h6>
      </div>
    </div>
  );
};

export default EdgeCard;
