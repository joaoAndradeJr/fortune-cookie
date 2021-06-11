import React from 'react';
import Cookie from './components/Cookie';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Cookie />
      </>
    );
  }
}

export default App;
