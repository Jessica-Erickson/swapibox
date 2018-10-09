import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <ScrollingText />
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
