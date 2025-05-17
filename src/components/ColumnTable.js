import React, { useEffect, useState } from "react";

const ColumnTable = () => {
  const [rows, setRows] = useState(5); // default value
  const [columns, setColumns] = useState(5); // default value
  const [grid, setGrid] = useState(new Array(rows * columns).fill(" "));

  useEffect(() => {
    setGrid(new Array(rows * columns).fill(" "));
  }, [rows, columns]);
  
  const styleGrid = {
    display: "flex",
    flexWrap: "wrap",
    width: "400px", // responsive width
    height: "100px",
    maxWidth: `${columns * 60}px`, // controls overall grid size
    margin: "0 auto",
    border: "1px solid #ccc",
  };

  const styleCell = {
    width: `${100 / columns}%`,
    // height: `${100 / rows}%`,
    backgroundColor: "pink",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: "1 / 1",
    border: "1px solid #000"
  };

  return (
    <div>
      <h1>ColumnTable</h1>
      <div style={{ padding: "20px" }}>
        <h3>Rows Value: {rows}</h3>
        <span>
          <label htmlFor="rows">Rows</label>
          <input
            type="range"
            min="0"
            max="25"
            step="5"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            style={{ width: "300px" }}
          />
        </span>
        <span>
          <h3>Columns Value: {columns}</h3>
          <label htmlFor="columns">Columns</label>
          <input
            type="range"
            min="0"
            max="25"
            step="5"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            style={{ width: "300px" }}
          />
        </span>
        <div style={styleGrid}>
          {grid.map((_, i) => (
            <div key={i.toString()} style={styleCell} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColumnTable;
