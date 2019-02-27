import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Products from './Products';

class App extends Component {

handleClick = () => {
  alert('I am Clicked');
};

  render() {
    return (
      <>
        <Header/>
        <div>
          <Sidebar/>
          <Products/>
        </div>
      </>
    );
  }
}

export default App;