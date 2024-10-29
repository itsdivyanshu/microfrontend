import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Sidebar />
          <main>
            <h1>Shared App</h1>
            <p>This is the main content area of the shared app.</p>
          </main>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
