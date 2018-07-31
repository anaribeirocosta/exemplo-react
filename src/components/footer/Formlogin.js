import React, { Component } from 'react';
import './Formlogin.css';

class Formlogin extends Component {

    render() {
        return (
        <div className="login">
            <h2>Digite seu dados para o Login</h2>
            <input type="text" name="username" id="username" placeholder="Digite aqui o username" />
            <input type="password" name="password" id="password" placeholder="Digite aqui o password" />
            <button>Logar</button>
        </div>    
        );
    }
}

export default Formlogin;
