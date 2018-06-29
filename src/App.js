import React, { Component } from 'react';
import './App.css';
import CheeseList from './components/cheese-list';

class App extends Component {

  constructor(props) {
    super(props)

    this.cheeses = [
        "Bath Blue",
        "Barkham Blue",
        "Buxton Blue"
      ];
  }
  render() {
    return (
    <CheeseList cheeses={this.cheeses}/>
    );
  }
}

export default App;
