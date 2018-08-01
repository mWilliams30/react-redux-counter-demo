import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './counter/CounterContainer';
import CounterContainerRedux from './counter-redux/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <CounterContainer />
        <CounterContainerRedux />
      </div>
    );
  }
}

export default App;
