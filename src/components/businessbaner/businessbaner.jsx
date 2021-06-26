import React from "react";
import "./businessbaner.css";

const BusinessBaner = () => {
  return (
    <div className="col-md-12">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-white">
          <h3 className="mb-0 pb-10 pl-0">
            Acheivers IT !
            <span className="text-muted f-12"> for business </span>
          </h3>
          <h4 className="lead mb-0 pb-10 pl-0">
            No more dull edges in your company.Make your employees into
          </h4>
          <h5 className="mb-0 pb-10 pl-0">
            Nurture talent with instructor-led courses on trending technologies
          </h5>
          <div className="mb-0 pb-10 pl-0">
            <button
              type="button"
              className="btn contact-btn btn-lg bg-white text-blue rounded-0"
            >
              BUSINESS CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBaner;
