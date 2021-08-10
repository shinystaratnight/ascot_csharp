import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "layouts/MainLayout.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.9.0";
import "assets/css/style.css"
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={ MainLayout } />
    </Switch>
  </Router>,
  document.getElementById("root")
);
