import React from "react";

const Accordian = ({ heading, id, collapse }) => {
  return (
    <div className="col-md-12 col-sm-12">
      <div className="accordion pb-10" id="accordionExample">
        <div className="accordion-item">
          <div className="accordion-header" id={id}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collapse}`}
              aria-expanded="true"
              aria-controls={collapse}
            >
              <h4>
                <strong>{heading}</strong>
              </h4>
              <h6>
                <strong>
                  Location : <span> Bangalore</span>
                </strong>
              </h6>
            </button>
          </div>
          <div
            id={collapse}
            className="accordion-collapse collapse"
            aria-labelledby="Front-end"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="job text-grey list-unstyled">
                <li>
                  <strong>Roles and Responsibilities : </strong>
                  <br />A front-end web developer is responsible for
                  implementing visual elements that users see and interact with
                  in a web application. have to supported by back-end web
                  developers, who are responsible for server-side application
                  logic and integration of the work front-end developer...
                </li>
                <li>
                  <strong> Desired Candidate Profile : </strong>
                  <br />
                  Front End Developer 4-10 yrs Angular js Nodejs, 2+ years of
                  exp on Angular and 1+ years of exp on NodeJS
                </li>
                <li>
                  <strong>Experience : </strong>4 to 10 years.
                </li>
                <li>
                  <strong>Skill set : </strong>
                  HTML,CSS,JAvascript,Angular, Nodejs.
                  <br />
                  <strong>Notice Period: </strong>
                  15 days to 30 days
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
