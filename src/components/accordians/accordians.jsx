import "./accordians.css";
import AccordianRowOne from "./accordiansRowOne";
import AccordianRowTwo from "./accordiansRowTwo";

const Accordians = () => {
  return (
    <div className="col-md-12 plr">
      <h3>Latest Job Openings</h3>
      <div className="row m-0">
        <AccordianRowOne />
        <AccordianRowTwo />
      </div>
    </div>
  );
};

export default Accordians;
