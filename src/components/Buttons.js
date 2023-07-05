import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({
  InputHandler,
  ClearInput,
  Backspace,
  PlusMinus,
  CalculateAns,
}) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("Equal").click();
    }
  });

  return (
    <div className="show-btn">
      <button className="btn exp" onClick={InputHandler}>
        ^
      </button>
      <button className="btn exp" onClick={InputHandler}>
        (
      </button>
      <button className="btn exp" onClick={InputHandler}>
        )
      </button>
      <button className="btn exp" onClick={InputHandler}>
        √
      </button>
      <button className="btn exp" onClick={InputHandler}>
        x<sup>2</sup>
      </button>
      <button className="btn clr" onClick={ClearInput}>
        AC
      </button>
      <button className="btn clr" onClick={Backspace}>
        ⌫
      </button>
      <button className="btn exp" onClick={InputHandler}>
        log
      </button>
      <button className="btn exp" onClick={InputHandler}>
        ÷
      </button>
      <button className="btn exp" onClick={InputHandler}>
        %
      </button>
      <button className="btn" onClick={InputHandler}>
        7
      </button>
      <button className="btn" onClick={InputHandler}>
        8
      </button>
      <button className="btn" onClick={InputHandler}>
        9
      </button>
      <button className="btn exp" onClick={InputHandler}>
        x
      </button>
      <button className="btn exp" onClick={InputHandler}>
        x<sup>3</sup>
      </button>
      <button className="btn" onClick={InputHandler}>
        4
      </button>
      <button className="btn" onClick={InputHandler}>
        5
      </button>
      <button className="btn" onClick={InputHandler}>
        6
      </button>
      <button className="btn exp" onClick={InputHandler}>
        -
      </button>
      <button className="btn exp" onClick={InputHandler}>
        <sup>3</sup>√
      </button>
      <button className="btn" onClick={InputHandler}>
        1
      </button>
      <button className="btn" onClick={InputHandler}>
        2
      </button>
      <button className="btn" onClick={InputHandler}>
        3
      </button>
      <button className="btn exp" onClick={InputHandler}>
        +
      </button>
      <button className="btn exp" onClick={InputHandler}>
        !
      </button>
      <button className="btn exp" onClick={PlusMinus}>
        ±
      </button>
      <button className="btn" onClick={InputHandler}>
        0
      </button>
      <button className="btn exp" onClick={InputHandler}>
        .
      </button>
      <button className="btn exp equal" id="Equal" onClick={CalculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;
