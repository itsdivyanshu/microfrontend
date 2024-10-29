import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
const Sidebar = () => {
    const count = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.user);
    return (_jsxs("div", { className: "sidebar", children: [_jsx("h2", { children: "Sidebar" }), _jsxs("p", { children: ["Counter: ", count] }), _jsxs("p", { children: ["User: ", user.name] })] }));
};
export default Sidebar;
