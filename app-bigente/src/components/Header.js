import React from 'react';
import '../styles/Header.css';
import { useDispatch } from 'react-redux';
import { changeTopic } from '../redux/topicSlice'; 

function Header() {
    const dispatch = useDispatch();
    
    const handleButtonClick = (topic) => {
        dispatch(changeTopic(topic));
    };

    return (
        <header className="header">
            <h1 className="page-title">
                <span className="red-text">Bi</span>
                <span className="black-text">gente</span>
            </h1>

            <nav className="navbar">
                <ul className="nav-list">
                    <li><button onClick={() => handleButtonClick("Chile")}>Chile</button></li>
                    <li><button onClick={() => handleButtonClick("Energía")}>Energía</button></li>
                    <li><button onClick={() => handleButtonClick("Derecho")}>Derecho</button></li>
                    <li><button onClick={() => handleButtonClick("Psicología")}>Psicología</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;