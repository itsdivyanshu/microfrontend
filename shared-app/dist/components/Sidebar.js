import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {
    const user = useSelector((state) => state.user);
    const count = useSelector((state) => state.counter.value);
    return (_jsxs("div", { style: {
            width: "250px",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            backgroundColor: "#f8f9fa",
            padding: "20px",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }, children: [_jsx("h2", { style: { marginBottom: "20px" }, children: "Sidebar" }), _jsx("nav", { children: _jsxs("ul", { style: { listStyle: "none", padding: 0 }, children: [_jsx("li", { style: { marginBottom: "10px" }, children: "Home" }), _jsx("li", { style: { marginBottom: "10px" }, children: "Child App 1" }), _jsx("li", { style: { marginBottom: "10px" }, children: "Child App 2" })] }) }), _jsxs("div", { style: { marginTop: "20px" }, children: [_jsx("h3", { children: "Shared State" }), _jsxs("p", { children: ["Counter: ", count] }), _jsxs("p", { children: ["User: ", user.name ? user.name : "Not set"] })] })] }));
};
export default Sidebar;
