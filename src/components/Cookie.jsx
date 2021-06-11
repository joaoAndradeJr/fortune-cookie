import React from 'react';
import biscoitoFechado from '../images/biscoitoFechado.jpg';
import biscoitoQuebrado from '../images/biscoitoQuebrado.jpg';
import { sentenses } from '../data';
import './cookieCss.css'

class Cookie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cracked: false, showFrase: false };
  }

  renderCookieImage() {
    const { cracked } = this.state;
    return cracked ?  biscoitoQuebrado : biscoitoFechado;
  }

  renderCookie() {
    const { cracked, showFrase } = this.state;
    const imgSrc = this.renderCookieImage();
    return (
      <img
        className="cookie-img"
        src={imgSrc}
        alt="biscoito da sorte"
        onClick={ () => this.setState({ cracked: !cracked, showFrase: !showFrase })}
      />
    );
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  renderFrase() {
    const { showFrase } = this.state;
    const min = 0;
    const max = sentenses.length - 1;
    const luckyNumber = this.getRandomIntInclusive(min, max);
    const frase = sentenses[luckyNumber];
    return (
      <p className="frase">
        {showFrase ? frase : ''}
      </p>
    );
  }

  render() {
    return (
      <main className="main-container">
        {this.renderCookie()}
        {this.renderFrase()}
      </main>
    );
  }
}

export default Cookie;
