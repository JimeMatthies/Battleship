import React, { useState } from "react";

const Computer = () => {

    const [turn, setTurn] = useState('Jugador');
    const [cells, setCells] = useState(Array(99).fill(''));
    const [computerHits, setComputerHits] = useState(0);
    const [playerHits, setPlayerHits] = useState(0);
    const [computerPick, setComputerPick] = useState(Math.floor(Math.random() * 99));
    const [computerShots, setComputerShots] = useState([]);

    const computerTurn = () => {

        console.log("ComputerTurn")
        console.log("Computer Pick = " + computerPick);
        let pick = computerPick;
        console.log(pick)

        if (!computerShots.includes(pick)) {
            if (cells[pick] === "X") {
                console.log("No se ha disparado aqui");
                computerShots.push(pick);
                console.log("La maquina disparo a un barco");
                setComputerHits(computerHits + 1);
                setComputerPick(Math.floor(Math.random() * 99));
                setCells[pick]("HIT");
                console.log("Disparos a Barcos de la maquina = " + computerHits)
                console.log("Lista de disparos = ")
                console.log(computerShots);
            }
            else if (cells[pick] === "") {
                console.log("No se ha disparado aqui");
                computerShots.push(pick);
                console.log("La maquina disparo al vacio");
                setComputerPick(Math.floor(Math.random() * 99));
                setCells[pick]("Miss")
                console.log("Disparos a Barcos de la maquina = " + computerHits);
                console.log("Lista de disparos = ");
                console.log(computerShots);
            }
        } else if (computerShots.includes(pick)) {
            console.log("Ya se disparo aqui");
            console.log("Disparos a Barcos de la maquina = " + computerHits);
            console.log("Lista de disparos = ");
            console.log(computerShots);
            pick = Math.floor(Math.random() * 99)
            //setComputerPick(Math.floor(Math.random() * 99));
            computerTurn()
        }
        //setTurn('Jugador');
    }

    const generateComputerShips = () => {
        console.log('generateComputerShips')
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
        }
    }

    const placeBoats = (num) => {
        let squares = [...cells];
        let shipscounter = squares.filter(x => x == 'X').length
        if (squares[num] === '') {
            if (shipscounter < 17) {
                squares[num] = 'X';
                setCells(squares);
                console.log("Indice del pick = " + num)
                console.log(squares);
                console.log("Contador de Barcos = " + squares.filter(x => x == 'X').length);
            }
            else if (shipscounter >= 17) {
                alert("Ya tienes todos tus barcos colocados, presiona start");
            }
        }
        else if (squares[num] === 'X') {
            squares[num] = '';
            setCells(squares);
            console.log("Indice del pick = " + num)
            console.log(squares);
            console.log("Contador de Barcos = " + squares.filter(x => x == 'X').length);
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
            checkForWinner()

        }
        else if (shipscounter < 17) {
            alert("Te faltan barcos por colocar")
        }
    }

    const Cell = ({ num }) => {
        return <td onClick={() => placeBoats(num)}>{cells[num]}</td>
    }


    return (
        <div className="bs-computer col-4">
            <div className="bs-computer__title">
                <h1>Turno: {turn}</h1>
            </div>
            <div className="bs-computer__board d-flex justify-content-center">
                <table>
                    <tbody>
                        <tr>
                            <Cell num={0} />
                            <Cell num={1} />
                            <Cell num={2} />
                            <Cell num={3} />
                            <Cell num={4} />
                            <Cell num={5} />
                            <Cell num={6} />
                            <Cell num={7} />
                            <Cell num={8} />
                            <Cell num={9} />
                        </tr>
                        <tr>
                            <Cell num={10} />
                            <Cell num={11} />
                            <Cell num={12} />
                            <Cell num={13} />
                            <Cell num={14} />
                            <Cell num={15} />
                            <Cell num={16} />
                            <Cell num={17} />
                            <Cell num={18} />
                            <Cell num={19} />
                        </tr>                    <tr>
                            <Cell num={20} />
                            <Cell num={21} />
                            <Cell num={22} />
                            <Cell num={23} />
                            <Cell num={24} />
                            <Cell num={25} />
                            <Cell num={26} />
                            <Cell num={27} />
                            <Cell num={28} />
                            <Cell num={29} />
                        </tr>                    <tr>
                            <Cell num={30} />
                            <Cell num={31} />
                            <Cell num={32} />
                            <Cell num={33} />
                            <Cell num={34} />
                            <Cell num={35} />
                            <Cell num={36} />
                            <Cell num={37} />
                            <Cell num={38} />
                            <Cell num={39} />
                        </tr>                    <tr>
                            <Cell num={40} />
                            <Cell num={41} />
                            <Cell num={42} />
                            <Cell num={43} />
                            <Cell num={44} />
                            <Cell num={45} />
                            <Cell num={46} />
                            <Cell num={47} />
                            <Cell num={48} />
                            <Cell num={49} />
                        </tr>                    <tr>
                            <Cell num={50} />
                            <Cell num={51} />
                            <Cell num={52} />
                            <Cell num={53} />
                            <Cell num={54} />
                            <Cell num={55} />
                            <Cell num={56} />
                            <Cell num={57} />
                            <Cell num={58} />
                            <Cell num={59} />
                        </tr>                    <tr>
                            <Cell num={60} />
                            <Cell num={61} />
                            <Cell num={62} />
                            <Cell num={63} />
                            <Cell num={64} />
                            <Cell num={65} />
                            <Cell num={66} />
                            <Cell num={67} />
                            <Cell num={68} />
                            <Cell num={69} />
                        </tr>                    <tr>
                            <Cell num={70} />
                            <Cell num={71} />
                            <Cell num={72} />
                            <Cell num={73} />
                            <Cell num={74} />
                            <Cell num={75} />
                            <Cell num={76} />
                            <Cell num={77} />
                            <Cell num={78} />
                            <Cell num={79} />
                        </tr>                    <tr>
                            <Cell num={80} />
                            <Cell num={81} />
                            <Cell num={82} />
                            <Cell num={83} />
                            <Cell num={84} />
                            <Cell num={85} />
                            <Cell num={86} />
                            <Cell num={87} />
                            <Cell num={88} />
                            <Cell num={89} />
                        </tr>                    <tr>
                            <Cell num={90} />
                            <Cell num={91} />
                            <Cell num={92} />
                            <Cell num={93} />
                            <Cell num={94} />
                            <Cell num={95} />
                            <Cell num={96} />
                            <Cell num={97} />
                            <Cell num={98} />
                            <Cell num={99} />
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bs-computer__reset mt-3">
                <button className="btn btn-success mx-3" onClick={() => clearBoard()}>Reset</button>
                <button className="btn btn-success mx-3" onClick={() => startGame()}>Start</button>
                <button className="btn btn-success mx-3" onClick={() => computerTurn()}>TurnoMaquina</button>
            </div>
        </div>
    );
}

export default Computer;