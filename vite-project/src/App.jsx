import "./App.css";
import { useStore } from "./store";

function App() {
  const orange = useStore(({ orange }) => orange);
  const violet = useStore(({ violet }) => violet);
  const clearBasket = useStore((state) => state.removeAll);
  const clearOrange = useStore((state) => state.removeOrange);
  const clearViolet = useStore((state) => state.removeViolet);
  const increaseOrange = useStore((state) => state.increaseOrange);
  const decreaseOrange = useStore((state) =>
    state.orange === 0 ? null : state.decreaseOrange
  );
  const increaseViolet = useStore((state) => state.increaseViolet);
  const decreaseViolet = useStore((state) =>
    state.violet === 0 ? null : state.decreaseViolet
  );
  return (
    <>
      <h2>Carrots</h2>
      <div>
        {" "}
        <h3>Buy:</h3>
        <p>
          Orange <button onClick={increaseOrange}>+1</button>{" "}
          <button onClick={decreaseOrange}>-1</button>
        </p>
        <p>
          Violet <button onClick={increaseViolet}>+1</button>{" "}
          <button onClick={decreaseViolet}>-1</button>
        </p>
      </div>
      <div>
        <h3>Owned</h3>

        <h3>
          Orange: {orange} <button onClick={clearOrange}> Clear </button>
        </h3>

        <h3>
          Violet: {violet} <button onClick={clearViolet}> Clear </button>
        </h3>
      </div>
      <button onClick={clearBasket}>Clear basket</button>
    </>
  );
}

export default App;
