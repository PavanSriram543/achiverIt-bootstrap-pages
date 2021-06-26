import React from "react";
import "./ourTrainings.css";

const TrainigCard = (props) => {
  return (
    <div className="col-md-3 col-6 pb-20">
      <div className="pb-30 bx-shadow company-img">
        <img src={props.image} alt="cg" className="sub-imgs" />
      </div>
    </div>
  );
};

export default TrainigCard;
