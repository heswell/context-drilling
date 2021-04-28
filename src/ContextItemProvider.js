import React, { useContext } from "react";

const ItemContext = React.createContext();

const buildDescriptors = (items, location, options) => {
  return items;
};

export const useContextItems = (location, options) => {
  const { showItems, itemHandler, items } = useContext(ItemContext);

  return {
    items,
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
  context: {
    items: inheritedItems,
    itemHandler: inheritedItemHandler
  } = NO_INHERITED_CONTEXT
}) => {
  const handleShowItems = (e, items) => {
    return items;
  };

  const handleItem = (e, item) => {
    if (itemHandler && itemHandler(e, item)) {
      return true;
    }

    if (inheritedItemHandler) {
      inheritedItemHandler(e, item);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        itemHandler: handleItem,
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
