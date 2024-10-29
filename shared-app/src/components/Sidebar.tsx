import * as React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const Sidebar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        backgroundColor: "#f8f9fa",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Sidebar</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            {/* <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}> */}
            Home
            {/* </Link> */}
          </li>
          <li style={{ marginBottom: "10px" }}>
            {/* <Link
              to="/child1"
              style={{ textDecoration: "none", color: "#007bff" }}
            > */}
            Child App 1{/* </Link> */}
          </li>
          <li style={{ marginBottom: "10px" }}>
            {/* <Link
              to="/child2"
              style={{ textDecoration: "none", color: "#007bff" }}
            > */}
            Child App 2{/* </Link> */}
          </li>
        </ul>
      </nav>
      <div style={{ marginTop: "20px" }}>
        <h3>Shared State</h3>
        <p>Counter: {count}</p>
        <p>User: {user.name ? user.name : "Not set"}</p>
      </div>
    </div>
  );
};

export default Sidebar;
