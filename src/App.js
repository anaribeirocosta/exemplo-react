import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Formlogin from './components/footer/Formlogin';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Formlogin />
        <Footer />      
      </div>
    );
  }
}

export default App;
