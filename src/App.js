import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './../src/redux/store';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  );
};

export default AppWrapper;