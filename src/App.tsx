import "./App.css";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [sliderOne, setSliderOne] = useState(25);
  const [sliderTwo, setSliderTwo] = useState(50);
  const [sliderThree, setSliderThree] = useState(60);
  const [selectedSliderPosition, setSelectedSliderPosition] = useState(0);

  const onButtonClick = (number) => {
    if (selectedSliderPosition === 1) {
      const newValue = sliderTwo + number;
      if (newValue >= 0) {
        setSliderTwo(sliderTwo + number);
      }
    } else if (selectedSliderPosition === 2) {
      const newValue = sliderThree + number;
      if (newValue >= 0) {
        setSliderThree(sliderThree + number);
      }
    } else {
      const newValue = sliderOne + number;
      if (newValue >= 0) {
        setSliderOne(sliderOne + number);
      }
    }
  };

  const CProgressBar = (props) => {
    return (
      <ProgressBar
        completed={props.sliderValue}
        margin="20px"
        height="30px"
        bgColor={props.sliderValue > 100 ? "red" : "blue"}
      />
    );
  };

  return (
    <div className="App">
      <header className="App-header">

        <h1>Progress bar Demo</h1>
        <Dropdown style={{ width: "100px", height: "50px" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {`Slider ${selectedSliderPosition + 1}`}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSelectedSliderPosition(0)}>
              Slider One
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedSliderPosition(1)}>
              Slider Two
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedSliderPosition(2)}>
              Slider Three
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div style={{ width: "40%" }}>
          <CProgressBar sliderValue={sliderOne} />
          <CProgressBar sliderValue={sliderTwo} />
          <CProgressBar sliderValue={sliderThree} />
        </div>

        <div style={{ flexDirection: "row" }}>
          <button onClick={() => onButtonClick(-10)}>-10</button>
          <button onClick={() => onButtonClick(-25)}>-25</button>
          <button onClick={() => onButtonClick(25)}>+25</button>
          <button onClick={() => onButtonClick(10)}>+10</button>
        </div>
      </header>
    </div>
  );
}

export default App;
