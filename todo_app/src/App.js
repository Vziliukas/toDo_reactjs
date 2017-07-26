import React, { Component } from 'react';
import List from './components/list/List.jsx';
import Header from './components/header/Header.jsx';
import Input from './components/input/Input.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
