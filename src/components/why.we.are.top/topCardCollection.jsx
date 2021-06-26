import React, { Component } from "react";
import TopCard from "./topcard";
import "./topCards.css";

class TopCardCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { p1: "135 +", p2: "TRENDING COURSES", id: 1, c1: "c1" },
        {
          p1: "60 +",
          p2: " IT Companies are tied-UP to hire our trained students",
          id: 2,
          c2: "c2",
        },
        {
          p1: "24 +",
          p2: " Students attend Interviews every day through our Placement Cell",
          id: 3,
          c1: "c1",
        },
        {
          p1: "3 +",
          p2: "Of our students Get Jobs every day in Bangalore and India",
          id: 4,
          c2: "c2",
        },
      ],
    };
  }
  render() {
    return (
      <div className="top p-4 mt-4">
        <div className="col-md-12 text-center plr">
          <h1 className="text-blue">Why We are on TOP 1</h1>
          <h6 className="text-blue pb-3">
            More people train with AcheiversIT because of ourcommitment to
            quality, Placement Support, and Real-time Training.
          </h6>
          <div className="row pb-4">
            {this.state.cards.map((card) => (
              <TopCard
                key={card.id}
                p1={card.p1}
                p2={card.p2}
                c2={card.c2}
                c1={card.c1}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TopCardCollection;
