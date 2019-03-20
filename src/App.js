import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Card from './Card'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="main-wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
export default App;
