import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [1,2,3,4,5,6,7,8,9,10]
    }
  }

  render() {
    return (
      <div className="App">
      {
        this.state.cards.map((element, index) => {
          return <Card key={index}/>
        })
      }
      </div>
    );
  }
}

export default App;
