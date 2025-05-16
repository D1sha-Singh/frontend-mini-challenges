import React, { useEffect, useRef, useState } from "react";

const n = 3;

const ColorSpotter = () => {
  const clickRef = useRef();
  const [cellNum, setCellNum] = useState(n);
  const [totalCells, setTotalCells] = useState(n * n);
  const [diff, setDiff] = useState(null);
  const [grid, setGrid] = useState(new Array(totalCells).fill(""));
  const [baseColor, setBaseColor] = useState('#fff');
const [oddColor, setOddColor] = useState('#000');
const [count, setCount] = useState(0);
const [max, setMax] = useState(0);
const [reveal, setReveal] = useState(false);


  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "400px", // responsive width
    height: "100px",
    maxWidth: `${cellNum * 60}px`, // controls overall grid size
    margin: "0 auto",
    border: "1px solid #ccc",
  };

  const cellStyle = {
    width: `${100 / cellNum}%`,
    aspectRatio: "1 / 1",
    boxSizing: "border-box",
    border: "1px solid #aaa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: baseColor,
  };

  useEffect(() => {
    const idx = Math.floor(Math.random() * totalCells);
    setDiff(idx);
    setGrid(new Array(totalCells).fill(""));
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    setBaseColor(`rgb(${r}, ${g}, ${b})`)
    setOddColor(`rgb(${r + 15}, ${g + 15}, ${b + 15})`)
  }, [totalCells]);

  const handleClick = (i) => {
    if (i === diff) {
      setTotalCells((cellNum + 1) * (cellNum + 1));
      setCellNum(cellNum + 1);
      setCount(count + 1)
    } else {
       setReveal(true);
    setTimeout(() => {
      setReveal(false);
      setCellNum(n);
      setTotalCells(n * n);
      setMax(Math.max(max, count));
      setCount(0);
    }, 1000); // Show highlight for 1 second
    }
  };

  return (
    <div>
      <h1>ColorSpotter</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
        <h3>Current Score: {count} </h3>
        <h3>Max Score: {max} </h3>
      </div>
      <div style={gridStyle}>
        {grid.map((_, i) => (
          <button
            key={i}
            style={
              i === diff
                ? { ...cellStyle, backgroundColor: oddColor, border: reveal && i === diff ? "3px solid red" : "1px solid #aaa", }
                : cellStyle
            }
            ref={clickRef}
            onClick={() => handleClick(i)}
            value={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSpotter;
