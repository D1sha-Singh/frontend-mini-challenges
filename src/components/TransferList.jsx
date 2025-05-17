import React, { useState } from "react";

const btns = ["<<", "<", ">", ">>"];

const TransferList = () => {
  const [list1, setList1] = useState([
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node.js",
    "MongoDB",
  ]);
  const [list2, setList2] = useState([
    "React Native",
    "TS",
    "Java",
    "Springboot",
    "Express.js",
  ]);

  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);

  const handleClick = (e) => {
    const val = e.target.textContent;
    console.log(val, e)
    if (val === "<<") {
      const newItems = list2.filter((item) => !list1.includes(item));
      setList1([...list1, ...newItems]);
      setList2([]);
      setSelected2([]);
    } else if (val === ">>") {
      const newItems = list1.filter((item) => !list2.includes(item));
      setList2([...list2, ...newItems]);
      setList1([]);
      setSelected1([]);
    } else if (val === "<") {
      const newItems = selected2.filter((item) => !list1.includes(item));
      setList1([...list1, ...newItems]);
      setList2(list2.filter((item) => !selected2.includes(item)));
      setSelected2([]);
    } else if (val === ">") {
        console.log(selected1)
      const newItems = selected1.filter((item) => !list2.includes(item));
      setList2([...list2, ...newItems]);
      setList1(list1.filter((item) => !selected1.includes(item)));
      setSelected1([]);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (list1.includes(value)) {
      setSelected1((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      );
    } else {
      setSelected2((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <div>
      <h1>TransferList</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <div>
          {list1.map((skill) => (
            <label key={skill} style={{ display: "block" }}>
              <input
                type="checkbox"
                value={skill}
                checked={selected1.includes(skill)}
                onChange={handleChange}
              />
              {skill}
            </label>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection:'column', justifyContent: "center" }}>
          {btns.map((item) => (
            <button onClick={handleClick}>{item}</button>
          ))}
        </div>
        <div>
          {list2.map((skill) => (
            <label key={skill} style={{ display: "block" }}>
              <input
                type="checkbox"
                value={skill}
                checked={selected2.includes(skill)}
                onChange={handleChange}
              />
              {skill}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferList;
