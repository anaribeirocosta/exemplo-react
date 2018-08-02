import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
        <nav>
            {this.props.links.map((texto, posicao) => <a key={posicao} href={this.props.hiperlinks[posicao]}>{texto}</a>)}
        </nav>
    );
  }
}

export default Navbar;
