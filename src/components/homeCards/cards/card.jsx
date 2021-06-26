import React from "react";
import "./card.css";

const HomeCard = (props) => {
  return (
    <div className="col-lg-4 col-md-4 col-12">
      <div className={`${props.class} custom-card card-1`}>
        <div>
          <span className="text-gray">BECOME A</span>
          <br />
          <span>
            <b>{props.developer} </b>
          </span>
        </div>
        <div>
          <span className="text-blue">Know More</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
