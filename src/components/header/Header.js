import React, { Component } from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';

class Header extends Component {
  render() {
    return (
        <header>
            <h1>Faça seu Login!</h1>
            <Navbar />
        </header>     
    );
  }
}

export default Header;
