import React from "react";
import Fleet from './Fleet';
import Player from './Player';
import Computer from './Computer';

const Game = ({ reglas }) => {
    return (
        <div className="bs-game d-flex justify-content-center text-center mt-3">
            <Fleet reglas={reglas}/>
            <Player />
            <Computer />
        </div>
    );
}

export default Game;