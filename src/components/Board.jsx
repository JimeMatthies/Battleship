import React from "react";

const Board = ({ cells, onClick }) => {

    const Cell = ({ num }) => {
        const style = cells[num] ? `squares ${cells[num]}` : `squares`;
        return <div className={style} onClick={() => onClick(num)}>{cells[num]}</div>
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="board">
                {cells.map((cell, index) => {
                        return (
                            <Cell num={index} key={index} />
                        );
                    })}
            </div>
        </div>
    );
};

export default Board;