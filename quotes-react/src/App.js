import React, { Component } from 'react';
import QuotesContainer from './components/QuotesContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Quote Board</h1>
        </div>
        <QuotesContainer />
      </div>
    );
  }
}

export default App;
