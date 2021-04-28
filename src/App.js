import Component from "./Component";
import { ContextItemProvider } from "./ContextItemProvider";
import "./styles.css";

export default function App() {
  const handleItem = (e, item) => {
    console.log(`handle Item ${item} at >>>>>>>>>>  App level`);
    return true;
  };

  return (
    <div className="App">
      <ContextItemProvider items={["item 0"]} itemHandler={handleItem}>
        <Component id="1" items={["item 1"]}>
          <Component id="2">
            <Component id="3" items={["item 3"]} />
          </Component>
        </Component>
      </ContextItemProvider>
    </div>
  );
}
