import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Done from "./auth/Done";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/done" component={Done} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}
export default App;