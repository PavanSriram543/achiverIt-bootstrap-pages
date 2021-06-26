import React, { Component } from "react";
import EdgeCard from "./edge.card";
import "./edge.css";

class EdgeCardCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { icon: "fas fa-check-circle fa-5x text-info", id: 1 },
        { icon: "fas fa-infinity fa-5x text-danger ", id: 2 },
        {
          icon: "fas fa-mobile-alt fa-5x text-orange  ",
          id: 3,
        },
        {
          icon: "fas fa-chart-line fa-5x text-warning",
          id: 4,
        },
      ],
    };
  }
  render() {
    return (
      <div className="col-md-12 plr">
        <h3 className="pb-20">Acheivers IT Edge</h3>
        <div className="row  m-0">
          {this.state.cards.map((card) => (
            <EdgeCard key={card.id} icon={card.icon} />
          ))}
        </div>
      </div>
    );
  }
}

export default EdgeCardCollection;
