import React, { Component } from "react";
import AccordianStatetwo from "./states/accordianStateTwo";
import "./accordians.css";
import Accordian from "./accordian";

class AccordianRowTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccordianTwo: AccordianStatetwo,
    };
  }
  render() {
    const { AccordianTwo } = this.state;

    return (
      <div className="col-md-6 col-sm-12 p-2">
        {AccordianTwo.map(({ id, ...accordianOtherProps }) => (
          <Accordian key={id} {...accordianOtherProps} />
        ))}
      </div>
    );
  }
}

export default AccordianRowTwo;
