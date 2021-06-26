import React from "react";
import "./categories.styles.css";

const CategorieCard = (props) => {
  return (
    <div className="col-md-2 col-sm-6 pb-10 ct-card">
      <div className="card align-items-center bg-white bx-shadow border-0 p-2">
        <i className={`${props.icon} p-2`}></i>
        <span className="text-center f-12 card-footer bg-white border-0 p-0">
          <small>{props.p}</small>
        </span>
      </div>
    </div>
  );
};

export default CategorieCard;
