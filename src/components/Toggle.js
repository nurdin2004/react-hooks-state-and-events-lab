import React, { useState } from "react";

function Toggle() {
    const [isOn, setIsOn] = useState(false);
    function handleClick() {
        setIsOn((prev) => !prev);
      }
    
      return (
        <button onClick={handleClick}>
          {isOn ? "ON" : "OFF"}
        </button>
      );
}

export default Toggle;
