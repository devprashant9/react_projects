import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import {Provider} from "react-redux";
import { store } from "./store/parentReducer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
