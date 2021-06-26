import React, { Component } from "react";
import CategorieCard from "./categories.card";
import "./categories.styles.css";

class CategorieCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { icon: "fab fa-dev fa-3x text-orange", p: "devOps", id: 1 },
        { icon: "fas fa-laptop-code fa-3x text-indigo", p: "Front End", id: 2 },
        {
          icon: "fas fa-mobile-alt fa-3x text-cyan ",
          p: "Mobile App Dev",
          id: 3,
        },
        {
          icon: "fas fa-funnel-dollar fa-3x text-blue",
          p: "Digital Marketing",
          id: 4,
        },
        {
          icon: "fas fa-file-code fa-3x text-orange",
          p: "Program and Frame works",
          id: 5,
        },
        {
          icon: "fas fa-database fa-3x text-light-blue",
          p: "Data Type",
          id: 6,
        },
        {
          icon: "fas fa-chalkboard-teacher fa-3x text-light-green",
          p: "Software Testing",
          id: 7,
        },
        {
          icon: "fab fa-jsfiddle fa-3x text-orange",
          p: "Cloud Computing",
          id: 8,
        },
        {
          icon: "fas fa-mask fa-3x text-light-blue",
          p: "Cyber Security",
          id: 9,
        },
        {
          icon: "fas fa-mobile-alt text-orange fa-3x",
          p: "Artificial Intilegence",
          id: 10,
        },
        { icon: "fab fa-python fa-3x text-light-green", p: "Python", id: 11 },
        { icon: "fab fa-codepen fa-3x text-indigo", p: "Big Data", id: 12 },
      ],
    };
  }
  render() {
    return (
      <div className="col-md-12 plr">
        <h3 className="pb-20">Discover Top Categories</h3>
        <div className="row pd-25-125 m-0">
          {this.state.cards.map((card) => (
            <CategorieCard key={card.id} icon={card.icon} p={card.p} />
          ))}
        </div>
      </div>
    );
  }
}

export default CategorieCards;
