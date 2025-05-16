import React, { useState } from "react";

const styles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const margin = { margin: 10 };

// const pascalcase = (strArr) => {
//     let ans = strArr.map(item => {
//        return item[0].toUpperCase()
//         .join(' ')
//     return ans
// }

const StringTransformers = () => {
  const [lowercase, setLowercase] = useState("");
  const [uppercase, setUppercase] = useState("");
  const [camelcase, setCamelcase] = useState("");
  const [pascalcase, setPascalcase] = useState("");
  const [snakecase, setSnakecase] = useState("");
  const [kebabcase, setKebabcase] = useState("");
  const [trimstr, setTrimstr] = useState("");
  const [titlecase, setTitlecase] = useState("");

  const transformerFn = (string) => {
    const trimmedInput = string.trim();
    const strArr = trimmedInput.split(/\s+/); // removes extra whitespace

    setLowercase(trimmedInput.toLowerCase());
    setUppercase(trimmedInput.toUpperCase());
    setSnakecase(strArr.join("_"));
    setKebabcase(strArr.join("-"));
    setTrimstr(trimmedInput.replace(/\s+/g, "")); // no spaces at all

    setPascalcase(
      strArr
        .map(
          (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        )
        .join("")
    );

    setCamelcase(
      strArr
        .map((item, index) => {
          const lower = item.toLowerCase();
          return index === 0
            ? lower
            : lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join("")
    );
    setTitlecase(
      strArr
        .map(
          (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        )
        .join(" ")
    );
  };
  return (
    <div>
      <h1>StringTransformers</h1>
      <input
        // value={string}
        placeholder="Enter the string to be transformed"
        onChange={(e) => transformerFn(e.target.value)}
      />
      <div>
        <div style={styles}>
          <label htmlFor="lowercase">Lowercase: </label>
          <h3 style={margin}>{lowercase}</h3>
        </div>
        <div style={styles}>
          <label htmlFor="uppercase">Uppercase: </label>
          <h3 style={margin}>{uppercase}</h3>
        </div>
        <div style={styles}>
          <label htmlFor="camelcase">Camelcase: </label>
          <h3 style={margin}>{camelcase}</h3>
        </div>
        <div style={styles}>
          <label htmlFor="pascalcase">Pascalcase: </label>
          <h3 style={margin}>{pascalcase}</h3>
        </div>
        <div style={styles}>
          <label htmlFor="snakecase">Snakecase: </label>
          <h3 style={margin}>{snakecase}</h3>
        </div>
        <div style={styles}>
          <label htmlFor="kebabcase">Kebabcase: </label>
          <h3 style={margin}>{kebabcase}</h3>
        </div>
        <div style={styles}>
          <label htmlFor="titlecase">Titlecase: </label>
          <h3 style={margin}>{titlecase}</h3>
        </div>

        <div style={styles}>
          <label htmlFor="trim">Trim: </label>
          <h3 style={margin}>{trimstr}</h3>
        </div>
      </div>
    </div>
  );
};

export default StringTransformers;
