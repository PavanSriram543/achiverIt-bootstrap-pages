import React from "react";

import "./courseCard.css";
import Li from "./li";

const CourseCard = ({ image, developer, items = [], number }) => {
  return (
    <div className="col-md-3 pb-20">
      <div className="card course-card border-0">
        <img className="card-top" src={image} alt="" />
        <div className="card-body">
          <p className="card-text justify text-ellipsis f-12">{developer}</p>
        </div>
        <div className="card-footer bg-white">
          <h6>
            <i>Reviews</i>
          </h6>
          <p className="card-text">
            <span className="text-warning">
              <i className="fa fa-star  fa-lg" aria-hidden="true" />
              <i className="fa fa-star  fa-lg" aria-hidden="true" />
              <i className="fa fa-star  fa-lg" aria-hidden="true" />
              <i className="fa fa-star  fa-lg" aria-hidden="true" />
              <i className="fa fa-star  fa-lg" aria-hidden="true" />
            </span>
            <span> {number} </span>
          </p>
        </div>{" "}
        <div className="card-data pb-20">
          <p className="f-12 mb-4 text-white">
            <i>Next Batch</i>
          </p>
          <h6 className="text-white">In 5 Days - 15th Jun</h6>
          <p className="f-12 mb-2 text-white">
            <i>What Will I Learn ?</i>
          </p>
          <ul className="text-white">
            {items.map(({ id, info }) => (
              <Li key={id} info={info} />
            ))}
          </ul>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-dark border-white contact-btn"
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
