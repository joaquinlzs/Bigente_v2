import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="page-title">
                <span className="red-text">Bi</span>
                <span className="black-text">gente</span>
            </h1>

            <nav className="navbar">
                <ul className="nav-list">
                    <li><button>Chile</button></li>
                    <li><button>Energía</button></li>
                    <li><button>Derecho</button></li>
                    <li><button>Psicología</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;