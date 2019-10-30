//React Stuffs
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

//Redux Stuffs
import { Provider } from "react-redux";
import { store, persistor } from "./Store";
import { PersistGate } from 'redux-persist/integration/react'

//Pages
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
