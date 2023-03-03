import React, { useState } from "react";
/* import { BrowserRouter, Route, Routes } from 'react-router-dom'; */
import Header from './components/Header';
import Rules from './components/Rules';
import Game from './components/Game';
import Footer from './components/Footer';

const App = () => {
    const [ estadoJuego, setEstadoJuego] = useState('aprendiendo'); // play or welcome

    const reglas = () => {
        if (estadoJuego === 'aprendiendo'){
            setEstadoJuego('jugando');
        }
        else if (estadoJuego === 'jugando'){
            setEstadoJuego('aprendiendo')
        }
    };

    return (
        <>
            <Header />
            {estadoJuego === 'jugando' ? <Game reglas={reglas} /> : <Rules reglas={reglas} />}
            <Footer />
        </>
    )
}

export default App;