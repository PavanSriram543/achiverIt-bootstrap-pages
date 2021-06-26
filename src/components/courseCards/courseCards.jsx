import React, { Component } from "react";
import CourseCard from "./courseCard/courseCard.jsx";
import "./courseCards.jsx";
import Course_DATA from "./coursecard_state/couesrCard_state.js";

class CoursCards extends Component {
  constructor() {
    super();

    this.state = {
      cards: Course_DATA,
    };
  }

  render() {
    return (
      <div className="col-md-12 plr">
        <div className="row m-0">
          <h3 className="pl-20 ">TRENDING COURSES</h3>
          {this.state.cards.map((card) => (
            <CourseCard
              image={card.image}
              key={card.id}
              developer={card.developer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CoursCards;
