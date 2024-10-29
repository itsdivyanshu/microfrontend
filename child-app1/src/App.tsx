import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, increment, decrement, Sidebar } from "shared-app";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h1>Child App 1</h1>
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
