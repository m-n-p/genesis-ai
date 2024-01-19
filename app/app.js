"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";

const App = function App({ children }) {
  return (
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </Provider>
  );
};

export default App;
