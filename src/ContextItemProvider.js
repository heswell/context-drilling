import React, { useContext } from "react";

const ItemContext = React.createContext();

export const useContextItems = (location, options) => {
  const showItems = useContext(ItemContext);

  return (evt) => {
    showItems(evt, buildDescriptors(location, options));
  };
};

const buildDescriptors = (location, options) => {
  return [{ location, options }];
};

const Provider = ({ children, showItems }) => {
  const handleShowItems = (e, itemDescriptors) => {
    return [];
  };
  return (
    <ItemContext.Provider value={handleShowItems}>
      {children}
    </ItemContext.Provider>
  );
};

export const ContextItemProvider = ({ children }) => {
  return (
    <ItemContext.Consumer>
      {(parentContext) => (
        <Provider showItems={parentContext}>{children}</Provider>
      )}
    </ItemContext.Consumer>
  );
};
