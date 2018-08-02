import React, { Component } from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';

class Header extends Component {
  render() {
    return (
        <header>
            <h1>Faça seu Login!</h1>
            <Navbar links={["facebook", "Instagram", "Twitter", "Pudim"]} hiperlinks={["https://facebook.com", "https://instagram.com", "https://twitter.com", "https://pudim.com.br"]}/>
        </header>     
    );
  }
}

export default Header;
