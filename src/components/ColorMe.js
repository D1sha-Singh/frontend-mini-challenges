import React, { useRef, useState } from "react";

const baseColor = "grey";
const oddColor = "green";
const gridSize = 3;
const totalCells = gridSize * gridSize;

const ColorMe = () => {
  const inputRef = useRef();
  const [val, setVal] = useState(null);
  const [error, setError] = useState(null);

  const grid = new Array(totalCells).fill("");

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    margin: "20px auto",
  };

  const cellStyle = {
    width: `${100 / gridSize}%`,
    borderRadius: "50%",
    aspectRatio: "1 / 1",
    boxSizing: "border-box",
    border: "1px solid #aaa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: baseColor,
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  const handleClick = () => {
    const inputValue = parseInt(inputRef.current.value);
    if (isNaN(inputValue) || inputValue < 1 || inputValue > totalCells) {
      setError("❌ Please enter a number between 1 and 9.");
      setVal(null);
    } else {
      setVal(inputValue - 1); // adjust for 0-based index
      setError(null);
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>🎨 Color Me</h1>
      <div style={gridStyle}>
        {grid.map((_, i) => (
          <div
            key={i}
            style={{
              ...cellStyle,
              backgroundColor: i === val ? oddColor : baseColor,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          placeholder="Enter a number (1–9)"
          ref={inputRef}
          style={{ padding: "5px", fontSize: "1rem" }}
        />
        <button
          onClick={handleClick}
          style={{
            padding: "5px 10px",
            marginLeft: "10px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>

      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
    </div>
  );
};

export default ColorMe;
