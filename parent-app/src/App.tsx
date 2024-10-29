import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  RootState,
  increment,
  decrement,
  setUser,
  clearUser,
  Sidebar,
} from "shared-app";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1>Parent App</h1>
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <h2>User</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button
          onClick={() =>
            dispatch(setUser({ name: "John Doe", email: "john@example.com" }))
          }
        >
          Set User
        </button>
        <button onClick={() => dispatch(clearUser())}>Clear User</button>
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
