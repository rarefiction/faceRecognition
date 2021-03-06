import React from "react";
import Tilty from "react-tilty";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <div className="App">
        <Tilty max="55" className="tilty br2 shadow2">
          <div className="inner pa3">
            <img style={{ paddingTop: "10px" }} alt="logo" src={brain} />
          </div>
        </Tilty>
      </div>
    </div>
  );
};

export default Logo;
