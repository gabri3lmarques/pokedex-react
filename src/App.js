import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Profile from "./pages/profile/profile.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/profile/:number" component={Profile} />
    </div>
  );
};

export default App;
