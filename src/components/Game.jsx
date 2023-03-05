import React, { useState } from "react";
import Fleet from './Fleet';
import Player from './Player';
import Computer from './Computer';

const Game = ({ reglas }) => {

    const [turn, setTurn] = useState('Jugador');
    const [cells, setCells] = useState(Array(100).fill(''));
    const [aicells, setAiCells] = useState(Array(100).fill(''));
    const [computerHits, setComputerHits] = useState(0);
    const [playerHits, setPlayerHits] = useState(0);
    const [computerShots, setComputerShots] = useState([]);

    const computerTurn = () => {
        checkForWinner();
        let pick = (Math.floor(Math.random() * 99));
        console.log(pick)
        // Condicional para ver si el numero que eligio la computadora ya fue disparado, y si contiene u barco o no.
        if (computerShots.includes(pick)) {
            computerTurn();
            return;
        }
        else if (!computerShots.includes(pick)) {
            if (cells[pick] === "X") {
                computerShots.push(pick);
                setComputerHits(computerHits + 1);
            }
            else if (cells[pick] === "") {
                computerShots.push(pick);
            }
            setTurn('Jugador');
        }
    }

    const checkForWinner = () => {
        if (computerHits === 17) {
            alert("Computer Wins")
        }
        else if (playerHits === 17) {
            alert("Player Wins")
        }
        else {
            console.log('checkForWinner')
            console.log("Puntos de la Computadora "+computerHits);
            console.log("Puntos del Jugador "+playerHits)
        }
    }

    const placeBoats = (num) => {
        let squares = [...cells];
        let shipscounter = squares.filter(x => x == 'X').length
        if (squares[num] === '') {
            if (shipscounter < 17) {
                squares[num] = 'X';
                setCells(squares);
                console.log(num)
            }
            else if (shipscounter >= 17) {
                alert("Ya tienes todos tus barcos colocados, presiona start");
            }
        }
        else if (squares[num] === 'X') {
            squares[num] = '';
            setCells(squares);
        }
    }

    const clearBoard = () => {
        setCells(Array(99).fill(''));
        setComputerHits(0);
        setPlayerHits(0);
        setComputerShots([]);
    }

    const startGame = () => {
        let shipscounter = cells.filter(x => x == 'X').length
        if (shipscounter === 17) {
            setTurn('Computador')
            generateComputerShips();
            computerTurn();
        }
        else if (shipscounter < 17) {
            alert("Te faltan barcos por colocar")
        }
    }

    const generateComputerShips = () => {
        let computerFleet = [];
        let aisquare = [...aicells]
        let repetido;
        console.log(aisquare)
        for (let i = 0; i < 17; i++) {
            while (!computerFleet[i]) {
                repetido = true;
                while (repetido == true) {
                    let random = Math.random();
                    random = random * 99;
                    random = Math.trunc(random);
                    for (let j = 0; j < computerFleet.length; j++) {
                        if (computerFleet[j] == random) {
                            repetido = true;
                            break;
                        } else {
                            repetido = false;
                        }
                    }
                    computerFleet[i] = random;
                }
            }
            aisquare[computerFleet[i]] = "X"
            console.log("Indice en al flota " + i);
            console.log("Numero del barco " + computerFleet[i]);
        }
        console.log(aisquare);
        setAiCells(aisquare)
        console.log(aicells);
    }

    const checkForBoats = (num) => {
        let boarddelacompu = [...aicells];
        console.log(num)
        console.log(boarddelacompu)
        if (boarddelacompu[num] === 'X') {
            console.log("player hit")
            setPlayerHits(playerHits + 1);
        }
        else if (boarddelacompu[num] === "") {
            console.log("player miss")
        }

        console.log("checkforboats")
        checkForWinner();
        computerTurn();
    }

    return (
        <div className="bs-game d-flex justify-content-center text-center mt-3">
            <Fleet reglas={reglas}/>
            <Player cells={cells} placeBoats={placeBoats} clearBoard={clearBoard} startGame={startGame}/>
            <Computer aicells={aicells} checkForBoats={checkForBoats}/>
        </div>
    );
}

export default Game;