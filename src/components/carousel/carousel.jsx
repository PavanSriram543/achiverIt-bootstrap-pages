import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="col-md-12">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.achieversit.com/assets/images/angular_training.jpg"
              className="d-block w-100"
              alt="angular_training"
            />
            <div className="carousel-caption d-none d-md-block carosel-data">
              <h1 className="heads">ANGULAR DEVELOPMENT COURSE</h1>
              <Link className="btn btn-orange bradius-0 pb-10" to="/">
                EXPLORE COURSE
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.achieversit.com/assets/images/react_training.jpg"
              className="d-block w-100"
              alt="aws_training"
            />
            <div className="carousel-caption d-none d-md-block carosel-data">
              <h1 className="heads">REACTJS DEVELOPMENT COURSE</h1>
              <Link className="btn btn-orange bradius-0 pb-10" to="/">
                EXPLORE COURSE
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.achieversit.com/assets/images/react_training.jpg"
              className="d-block w-100"
              alt="full_stack_development"
            />
            <div className="carousel-caption d-none d-md-block carosel-data">
              <h1 className="heads">PYTHON DEVELOPMENT COURSE</h1>
              <Link className="btn btn-orange bradius-0 pb-10" to="/">
                EXPLORE COURSE
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.achieversit.com/assets/images/react_training.jpg"
              className="d-block w-100"
              alt="react_training"
            />
            <div className="carousel-caption d-none d-md-block carosel-data">
              <h1 className="heads">AMAZON WEB SERVICES COURSE</h1>
              <Link className="btn btn-orange bradius-0 pb-10" to="/">
                EXPLORE COURSE
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.achieversit.com/assets/images/react_training.jpg"
              className="d-block w-100"
              alt="web_development"
            />
            <div className="carousel-caption d-none d-md-block carosel-data">
              <h1 className="heads">WEB DEVELOPMENT COURSE</h1>
              <Link className="btn btn-orange bradius-0 pb-10" to="/">
                EXPLORE COURSE
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
