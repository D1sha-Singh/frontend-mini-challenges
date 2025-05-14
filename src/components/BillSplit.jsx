import React, { useState } from "react";

const BillSplit = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [contri, setContri] = useState("");
  const [total, setTotal] = useState("");
  const [shouldGen, setShouldGen] = useState(false);

  const calcTip = (percent) => {
    let tipVal = (bill * percent) / 100;
    setTip(tipVal);
  };

  const calcBill = () => {
    setShouldGen(true)
    let tot =  +bill + tip
    setTotal(tot)
    setContri(tot/ people)
  }
  const reset = () => {
    setTip(null);
    setTotal(null)
    setContri(null)
    setPeople(null)
    setBill(null)
    setShouldGen(false)
  }

  return (
    <div>
      <h2>BillSplit</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            borderColor: "black",
            borderRadius: 10,
            borderWidth: 2,
            width: 180,
            height: "auto",
          }}
        >
          <div>
            <label>Bill Amount: </label>
            <input
              placeholder="Enter bill amount"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
            <label>Tip:</label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <button onClick={() => calcTip(5)} disabled={bill === null}>5%</button>
              <button onClick={() => calcTip(10)} disabled={bill === null}>10%</button>
              <button onClick={() => calcTip(15)} disabled={bill === null}>15%</button>
              <button onClick={() => calcTip(20)} disabled={bill === null}>20%</button>
              <button onClick={() => calcTip(25)} disabled={bill === null}>25%</button>
              <button onClick={() => calcTip(30)} disabled={bill === null}>30%</button>
              <input
                placeholder="Custom tip"
                onChange={(e) => calcTip(e.target.value)}
              />
            </div>
            <label>Number of people:</label>
            <input
                placeholder="No. of people"
                onChange={(e) => setPeople(e.target.value)}
              />
               <button onClick={calcBill}>Generate Bill</button>
          </div>
        </div>
        <div
          style={{
            borderColor: "grey",
            borderRadius: 10,
            borderWidth: 2,
            width: 200,
            height: "auto",
            backgroundColor: 'blue'
          }}
        > 
            <h3>Tip Amount:</h3>
            {shouldGen && <h3>{tip}</h3>}
            <h3>Total:</h3>
            {shouldGen && <h3>{total}</h3>}
            <h3>Each person bill: </h3>
            {shouldGen && <h3>{contri}</h3>}
            <button onClick={reset}>Reset Bill</button>
        </div>
      </div>
    </div>
  );
};

export default BillSplit;
