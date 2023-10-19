import React from 'react';
import '../styles/Header.css';
import { useDispatch } from 'react-redux';
import { changeTopic } from '../redux/topicSlice'; 
import sourceListChile from "../data/sourceListChile.json";
import sourceListEnergia from "../data/sourceListEnergia.json";
import fetchData from "../utility/fetchData";

function Header() {
    const dispatch = useDispatch();
    
    const handleButtonClick = async (topic) => {
        const sourceLists = {
            "Chile": sourceListChile,
            "Energia": sourceListEnergia
        };
        const allPostsOfTopic = [];
        const selectedSourceList = sourceLists[topic];
        if (selectedSourceList) {
            const links = Object.keys(selectedSourceList).map((id) => fetchData(selectedSourceList[id]));
            console.log(links)
        }
        // Se debe despachar la data lista
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
                    <li><button onClick={() => handleButtonClick("Energia")}>Energía</button></li>
                    <li><button onClick={() => handleButtonClick("Derecho")}>Derecho</button></li>
                    <li><button onClick={() => handleButtonClick("Psicologia")}>Psicología</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;