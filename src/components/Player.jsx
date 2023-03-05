import React, { useState } from "react";

const Player = () => {

    const [turn, setTurn] = useState('Jugador');
    const [cells, setCells] = useState(Array(99).fill(''));
    const [computerHit, setComputerHit] = useState(0);
    const [playerHit, setPlayerHit] = useState(0)

    const checkForWinner = () => {
        let aihit = [...computerHit];
        let pHit = [...playerHit];

        if (aihit === 17){
            console.log('computer wins')
        }
        else if (pHit === 17){
            console.log('player wins')
        }
    }

    const placeBoats = (num) => {
        let squares = [...cells];
        if(squares[num] === ''){
            squares[num] = 'X';
            setCells(squares);
            console.log(num)
            console.log(squares);
        }
        else if (squares[num] === 'X') {
            squares[num] = '';
            setCells(squares);
            console.log(num);
            console.log(squares);
        }
    }

    const clearBoard = () => {
        setCells(Array(99).fill(''));
        setComputerHit(0);
        setPlayerHit(0);
        console.log(cells);
    }

    const startGame = () => {
        
        setTurn('Computador')
        generateComputerShips();

        "Computador juega"

        if ("computador pega"){
            setComputerHit(computerHit + 1)
        } else if (
            "Computer miss"
        )
        checkForWinner()
        setTurn('Jugador')
    }

    const Cell = ({ num }) => {
        return <td onClick={() => placeBoats(num)}>{cells[num]}</td>
    }


    return (
        <div className="bs-player col-4">
            <div className="bs-player__title">
                <h1>Turno: {turn}</h1>
            </div>
            <div className="bs-player__board d-flex justify-content-center">
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
            <div className="bs-player__reset mt-3">
                <button className="btn btn-success mx-3" onClick={() => clearBoard()}>Reset</button>
                <button className="btn btn-success mx-3" onClick={() => startGame()}>Start</button>
            </div>
        </div>
    );
}

export default Player;