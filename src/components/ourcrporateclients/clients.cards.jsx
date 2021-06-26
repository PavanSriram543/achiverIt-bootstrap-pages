import React, { Component } from "react";
import Images from "./state";
import ClientCard from "./clients.card";
import "./client.cards.css";

class ClientCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Images,
    };
  }
  render() {
    return (
      <div className="col-md-12 p-4">
        <div className="plr">
          <h3 className="mb">Our Trainers From</h3>
          <div className="row m-0">
            {this.state.cards.map((card) => (
              <ClientCard key={card.id} image={card.image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ClientCards;
