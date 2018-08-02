import React, { Component } from 'react';
import './Footer.css';
import imgFB from './icon1.png';
import imgInsta from './icon2.png';
import imgTwitter from './icon3.png';
import Navbar from '../navbar/Navbar';


class Footer extends Component {
    clicar(){
        prompt("digite seu email");
    }
    render() {
        return (
            <footer>
                <p className="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi eius, minus autem atque cupiditate tempora vero repellat eum reprehenderit alias doloribus doloremque facere quas beatae provident quasi aspernatur saepe.    </p>
                <div className= "container">
                <button onClick={this.clicar}>Fale Conosco</button>
                    <div className="Social">
                        <img className="social-icon" src={imgFB} alt="Facebook" />
                        <img className="social-icon" src={imgInsta} alt="Instagram" />
                        <img className="social-icon" src={imgTwitter} alt="Twitter" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
