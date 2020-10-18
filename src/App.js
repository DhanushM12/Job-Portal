import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import JForm from "./JForm";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/jobseeker">
          <Header />
          <JForm />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
