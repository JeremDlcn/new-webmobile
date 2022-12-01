import * as react from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header(props) {
  return (
    <header className="header">
        <div className="header-logo">
            <img src="/logo.png" alt="logo" />
        </div>
        <nav className="header-nav">
            <ul className="header-nav-list">
                <li className="header-nav-item">
                    <Link to="/">Accueil</Link>
                </li>
                <li className="header-nav-item">
                    <Link to="/history">Histoire</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;