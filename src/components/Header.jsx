import React from 'react';
import './headerCss.css'

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <h1 className="header-title">Biscoito da Sorte!</h1>
      </header>
    );
  }
}

export default Header;
