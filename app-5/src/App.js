import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://placeholder.com/"} />
      </div>
    );
  }
}

export default App;
