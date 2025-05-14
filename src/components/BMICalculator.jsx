import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);

  const calcBmi = () => {
    let bmi = 0
    let ht = height/100
    bmi = weight/(ht * ht)
    setBmi(bmi)
  }

  const clickPlus = (category) => {
    if(category === "height") {
        setHeight(height !== null ? +height + 1 : 1)
    } else setWeight(weight !== null ? +weight + 1 : 1)
  }

  const clickMinus = (category) => {
    if(category === "height") {
        setHeight(height !== null ? +height - 1 : 0)
    } else setWeight(weight !== null ? +weight - 1 : 0)
  }

  return (
    <div>
      <h2>BMICalculator</h2>
      <div>
        <label>Height (cm): </label>
        <input
          placeholder="Enter height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={() => clickPlus("height")}>+</button>
        <button onClick={() => clickMinus("height")}>-</button>
      </div>
      <div>
        <label>Weight (kg): </label>
        <input
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button onClick={() => clickPlus("weight")}>+</button>
        <button onClick={() => clickMinus("weight")}>-</button>
      </div>
      <button onClick={calcBmi}>Calculate BMI</button>
        <h1>Your BMI:</h1>
        <h1>{bmi}</h1>
    </div>
  );
};

export default BMICalculator;
