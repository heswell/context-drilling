import React, { useState } from "react";
import { ContextItemProvider, useContextItems } from "./ContextItemProvider";

import "./Component.css";

const defaultItems = ["Item A", "Item B"];

const Component = ({ children, id, items: contextItems = [] }) => {
  const [items, setItems] = useState([]);
  const {
    items: inheritedContextItems = [],
    // showItems,
    handleItemClick
  } = useContextItems("1", {});

  const allItems = inheritedContextItems
    .concat(contextItems)
    .concat(defaultItems);
  const handleClick = (e) => {
    // const items = showItems(e);
    setItems(allItems);
  };

  const handleItem = (e, item) => {
    e.stopPropagation();
    if (contextItems.includes(item) || defaultItems.includes(item)) {
      console.log(`Component #${id} handle item >>>>>>  ${item}`);
      return true;
    } else {
      return handleItemClick(e, item);
    }
  };

  const component = (
    <div className="Component">
      <div
        className="div-items"
        style={{ width: 120, borderRight: "solid 1px #999" }}
      >
        <div>Component {id}</div>
        {items.length === 0
          ? "No Items"
          : items.map((item, idx) => (
              <div
                className="Item"
                key={idx}
                onClick={(e) => handleItem(e, item)}
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
    <ContextItemProvider items={contextItems} itemHandler={handleItem}>
      {component}
    </ContextItemProvider>
  ) : (
    component
  );
};

export default Component;
