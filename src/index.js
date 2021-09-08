import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducers/index';
 
import "./index.scss";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";


const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Provider store={store}>
      <Route path="/" exact={true} component={App} />
      </Provider>  
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

