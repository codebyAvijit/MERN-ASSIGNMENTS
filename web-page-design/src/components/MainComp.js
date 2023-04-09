import React from "react";
import FormComp from "./FormComp";
import "./MainComp.css";
const MainComp = () => {
  return (
    <div>
      <div className="outerDiv">
        <div className="innerDiv">
          <div className="left-div">
            <img
              src="https://img.freepik.com/free-vector/papers-other-office-supplies_1308-82206.jpg"
              alt="door-image"
              height="90%"
              width="100%"
            />
          </div>
          <div className="right-div">
            <FormComp />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainComp;
