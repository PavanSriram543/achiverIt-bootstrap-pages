import React from "react";
import "./card.css";

const HomeCard = (props) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 ">
      <div className="p-2">
        <div className={`${props.color ? "card-2" : "card-1"} custom-card `}>
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
    </div>
  );
};

export default HomeCard;
