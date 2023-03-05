import React from "react";
import Board from "./Board";

const Computer = ({ cells }) => {

    const generateComputerShips = () => {
        console.log('generateComputerShips')
    }

    return (
        <div className="bs-computer col-4">
            <div className="bs-computer__title">
                <h1>Computer</h1>
            </div>
            <div className="bs-computer__board d-flex justify-content-center">
                <Board cells={cells} />
            </div>
        </div>
    );
}

export default Computer;