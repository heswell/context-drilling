import React, { useState } from "react";
import { ContextItemProvider, useContextItems } from "./ContextItemProvider";

import "./Component.css";

const Component = ({ children, items: contextItems }) => {
  const [items, setItems] = useState([]);
  const { showItems, handleItemClick } = useContextItems("1", {});

  const handleClick = (e) => {
    const items = showItems(e);
    setItems(items);
  };

  const component = (
    <div className="Component">
      <div
        className="div-items"
        style={{ width: 120, borderRight: "solid 1px #999" }}
      >
        {items.length === 0
          ? "No Items"
          : items.map((item, idx) => (
              <div
                className="Item"
                key={idx}
                onClick={(e) => handleItemClick(e, item)}
              >
                {item}
              </div>
            ))}
      </div>
      <div className="div-content" onClick={handleClick} style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );

  return contextItems ? (
    <ContextItemProvider items={contextItems}>{component}</ContextItemProvider>
  ) : (
    component
  );
};

export default Component;
