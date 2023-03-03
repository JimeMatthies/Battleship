import React from "react";

const Game = ({reglas}) => {
    return (
        <div className="bs-game">
            <h1>Tablero 10x10</h1>
            <button className="btn btn-success" onClick={reglas}>Reglas</button>
        </div>
    );
}

export default Game;