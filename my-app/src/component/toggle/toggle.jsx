/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ToggleStyle.css";

function Toggle() {
  const [on, setOn] = useState(false);
  //   console.log(on);

  //   console.log(on, setOn);
  const handleToggle = () => {
    // setOn(callback) -> setOn(prevState => !prevState)
    setOn((on) => !on); // defaut on la off, muon set on =>  !on
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div>
    </div>
  );
}
export default Toggle;
