import React from "react";
import App from "pages/App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
};
