import React from "react";

const ClientCard = (props) => {
  return (
    <div className="col-md-2 col-sm-6 pb-30">
      <img src={props.image} alt="cg" className="cal-imgs" />
    </div>
  );
};

export default ClientCard;
