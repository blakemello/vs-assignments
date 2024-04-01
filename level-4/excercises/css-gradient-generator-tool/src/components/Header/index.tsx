import React from 'react';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';
import './Header.scss';

const Header: React.FC = () => (
  <header className="header">
    <div>
      <Logo className="header__icon" />
      <h1 className="header__title">CSS Gradient</h1>
    </div>
  </header>
);

export default Header;