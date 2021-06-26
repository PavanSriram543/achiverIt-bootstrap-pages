import React, { Component } from "react";
import CourseCard from "../courseCards/courseCard/courseCard";
import Course_DATA from "./state.js";

class Recentadditions extends Component {
  constructor() {
    super();

    this.state = {
      cards: Course_DATA,
    };
  }

  render() {
    return (
      <div className="col-md-12 plr mt-4">
        <div className="row m-0">
          <h3 className="pl-20">RECENT ADDITIONS</h3>
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

export default Recentadditions;
