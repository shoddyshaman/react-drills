import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ninjas: [ 'naruto','sasuke','shikamaru','hinata','choji']
    };
  }

  render () {
    let ninjasToDisplay = this.state.ninjas.map((element,index) => {
      return <h2 key={index}>{element}</h2>
    });

    return <div className='App'>{ninjasToDisplay}</div>;
  }
  
}

export default App;
