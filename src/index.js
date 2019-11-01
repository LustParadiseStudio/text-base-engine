//React Stuffs
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

//Redux Stuffs
import { Provider } from "react-redux";
import { store, persistor } from "./Store";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
//Pages
import App from "./App";
import { Home } from "./Home";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route exact={true} path="/auth" component={App}></Route>
          <Route
            path="/patreon"
            component={() => {
              window.location.href = "https://www.patreon.com/oauth2/authorize?response_type=code&client_id=evT5pxgeAoFluzvZbqhmtxVd2gXXPmK9T_6hYm1o0IVWzeQMOO1hylBsTknQYdQZ&redirect_uri=https://text-base-engine.herokuapp.com/auth/";
              return null;
            }}
          ></Route>
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
