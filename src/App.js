import React, { Component } from "react";
import Feed from "./components/feed/Feed";
import Filters from "./components/feed/Filters";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters />
        <Feed />
      </div>
    );
  }
}

export default App;
