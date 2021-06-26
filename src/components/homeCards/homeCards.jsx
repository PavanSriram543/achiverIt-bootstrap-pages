import React, { Component } from "react";
import HomeCard from "./cards/card";
import "./homeCards.css";

class Homecards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          developer: "UI developer",
          id: 1,
        },
        {
          developer: "ANGULAR developer",
          id: 2,
          class: "card-2",
        },
        {
          developer: "REACTJS developer",
          id: 3,
        },
      ],
    };
  }
  render() {
    return (
      <div className="row m-0 h-card plr">
        {this.state.cards.map((card) => (
          <HomeCard
            key={card.id}
            className={card.class}
            developer={card.developer}
          />
        ))}
      </div>
    );
  }
}

export default Homecards;
