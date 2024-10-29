import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setUser, clearUser, Sidebar } from "shared-app";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1>Child App 2</h1>
      <div>
        <h2>User</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button
          onClick={() =>
            dispatch(setUser({ name: "Jane Doe", email: "jane@example.com" }))
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
