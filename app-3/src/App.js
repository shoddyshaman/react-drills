import React, { Component } from "react";
import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      filterString:'',
      ninjas: [ 'naruto','sasuke','shikamaru','hinata','choji']
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }
  
  render () {
    let ninjasToDisplay = this.state.ninjas
    .filter((element,index) =>{
      return element.includes(this.state.filterString)
    })
    .map((element,index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App"><br/>
        <input onChange={ e => this.handleChange(e.target.value)} type = 'text' />
        {ninjasToDisplay}
      </div>
    )
  }
}

export default App;
