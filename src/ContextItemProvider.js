import React, { useContext } from "react";

const ItemContext = React.createContext();

const buildDescriptors = (items, location, options) => {
  return items;
};

export const useContextItems = (location, options) => {
  const { showItems, itemHandler, items } = useContext(ItemContext);

  return {
    handleItemClick: itemHandler,
    showItems: (evt) =>
      showItems(evt, buildDescriptors(items, location, options))
  };
};

const NO_INHERITED_CONTEXT = { items: [] };

const Provider = ({
  children,
  itemHandler,
  items,
  context: { items: inheritedItems } = NO_INHERITED_CONTEXT
}) => {
  const handleShowItems = (e, items) => {
    return items;
  };
  return (
    <ItemContext.Provider
      value={{
        itemHandler,
        items: inheritedItems.concat(items),
        showItems: handleShowItems
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const ContextItemProvider = ({ children, itemHandler, items }) => {
  return (
    <ItemContext.Consumer>
      {(parentContext) => (
        <Provider
          items={items}
          context={parentContext}
          itemHandler={itemHandler}
        >
          {children}
        </Provider>
      )}
    </ItemContext.Consumer>
  );
};
