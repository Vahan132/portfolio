import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Products from './Products';
import Button from './Button';

class App extends Component {



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