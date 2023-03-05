import React from "react";
import Board from "./Board";

const Player = ({cells, placeBoats, clearBoard, startGame, computerTurn }) => {

    return (
        <div className="bs-player col-4">
            <div className="bs-player__title">
                <h1>Jugador</h1>
            </div>
            <div className="bs-player__board d-flex justify-content-center">
                <Board cells={cells} onClick={placeBoats} />
            </div>
            <div className="bs-player__reset mt-3">
                <button className="btn btn-success mx-3" onClick={clearBoard}>Reset</button>
                <button className="btn btn-success mx-3" onClick={startGame}>Start</button>
                <button className="btn btn-success mx-3" onClick={computerTurn}>TurnoMaquina</button>
            </div>
        </div>
    );
}

export default Player;