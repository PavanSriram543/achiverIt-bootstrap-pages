import React, { Component } from "react";
import Accordian from "./accordian";
import "./accordians.css";
import AccordianStateone from "./states/accordianStateOne";

class AccordianRowOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccordianOne: AccordianStateone,
    };
  }
  render() {
    const { AccordianOne } = this.state;
    return (
      <div className="col-md-6 col-sm-12 p-2">
        {AccordianOne.map(({ id, ...accordianOtherProps }) => (
          <Accordian key={id} {...accordianOtherProps} />
        ))}
      </div>
    );
  }
}

export default AccordianRowOne;
