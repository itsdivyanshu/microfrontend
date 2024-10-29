import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import Sidebar from "./components/Sidebar";
const App = () => {
    return (_jsx(Provider, { store: store, children: _jsx(PersistGate, { loading: null, persistor: persistor, children: _jsxs("div", { className: "app", children: [_jsx(Sidebar, {}), _jsxs("main", { children: [_jsx("h1", { children: "Shared App" }), _jsx("p", { children: "This is the main content area of the shared app." })] })] }) }) }));
};
export default App;
