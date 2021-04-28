import React, { useState } from "react";
import "./Component.css";

const Component = ({ children }) => {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    console.log(`handleClick`);
  };

  return (
    <div
      className="Component"
      onClick={handleClick}
      style={{ display: "flex", width: "100vw", height: "100vh" }}
    >
      <div
        className="div-items"
        style={{ width: 150, borderRight: "solid 1px #999" }}
      ></div>
      <div className="div-content" style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Component;
