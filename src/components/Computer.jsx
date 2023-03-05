import React from "react";
import Board from "./Board";

const Computer = ({ aicells, checkForBoats }) => {

    return (
        <div className="bs-computer col-4">
            <div className="bs-computer__title">
                <h1>Computer</h1>
            </div>
            <div className="bs-computer__board d-flex justify-content-center">
                <Board cells={aicells} onClick={checkForBoats} />
            </div>
            <div className="bs-player__reset mt-3">
            </div>
        </div>
    );
}

export default Computer;