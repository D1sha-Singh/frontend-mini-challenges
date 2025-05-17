import React, { useRef, useState } from "react";

const getColor = (type) => {
  switch (type) {
    case "Success":
      return "#4caf50";
    case "Error":
      return "#f44336";
    case "Warning":
      return "#ff9800";
    case "Info":
      return "#2196f3";
    default:
      return "#333";
  }
};

const Snackbar = () => {
  const inputRef = useRef();
  const [toasts, setToasts] = useState([]);
  const [horizontal, setHorizontal] = useState("Right");
  const [vertical, setVertical] = useState("Top");
  const [type, setType] = useState("Normal");

  const handleAddToast = () => {
    const message = inputRef.current.value;
    const newToast = {
      id: Date.now(),
      message,
      type,
      position: {
        [vertical.toLowerCase()]: "20px",
        [horizontal.toLowerCase()]: "20px",
      },
    };
    setToasts((prev) => [...prev, newToast]);

    // Auto-remove toast after 3s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 5000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Multiple Snackbars</h1>

      {/* Render All Toasts */}
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          style={{
            position: "fixed",
            backgroundColor: getColor(toast.type),
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "4px",
            marginTop: `${index * 60}px`,
            zIndex: 1000,
            ...toast.position,
          }}
        >
          {toast.message}
        </div>
      ))}

      {/* Controls */}
      <div style={{ marginTop: "20px" }}>
        <label>Horizontal: </label>
        <select onChange={(e) => setHorizontal(e.target.value)}>
          <option>Right</option>
          <option>Left</option>
        </select>

        <label style={{ marginLeft: "10px" }}>Vertical: </label>
        <select onChange={(e) => setVertical(e.target.value)}>
          <option>Top</option>
          <option>Bottom</option>
        </select>

        <label style={{ marginLeft: "10px" }}>Type: </label>
        <select onChange={(e) => setType(e.target.value)}>
          <option>Normal</option>
          <option>Error</option>
          <option>Warning</option>
          <option>Success</option>
          <option>Info</option>
        </select>
      </div>

      <div style={{ marginTop: "10px" }}>
        <input ref={inputRef} placeholder="Enter message" />
        <button onClick={handleAddToast} style={{ marginLeft: "10px" }}>
          Show toast
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
