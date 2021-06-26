import React, { Component } from "react";
import Images from "./state";
import "./ourTrainings.css";
import TrainigCard from "./card";

class TrainingCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Images,
    };
  }
  render() {
    return (
      <div className="col-md-12 ptb">
        <div className="plr">
          <h3 className="mb">Our Trainers From</h3>
          <div className="row m-0">
            {this.state.cards.map((card) => (
              <TrainigCard key={card.id} image={card.image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingCards;
