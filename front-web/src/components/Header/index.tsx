import React from 'react';
import {ReactComponent as Logo } from '../../assets/logo.svg';
import './styles.css';

const Header = () => (
    <header className="main-header">
        <Logo />
        <div className="logo-text">
        <spam className="logo-text-1">Big Game</spam>
        <spam className="logo-text-2"> Survey</spam>
        </div>
    </header>
);

export default Header;