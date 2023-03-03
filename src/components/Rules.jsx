import React from "react";

const Rules = ({ reglas }) => {
    return (
        <div className="bs-rules d-flex justify-content-center">
            <div className="card text-center col-6">
                <div className="card-header">
                    ¡Bienvenido!
                </div>
                <div className="card-body">
                    <h5 className="card-title">Reglas</h5>
                    <p className="card-text">Estás compitiendo contra la maquina en una batalla naval. Tu flota estará posicionada en coordenadas secretas, y cada turno se dispararán torpedos mutuamente. ¡El primero en hundir toda la flota del enemigo gana!</p>
                    <button className="btn btn-success" onClick={reglas}>Jugar</button>
                </div>
                <div className="card-footer text-muted">
                    ¡Buena suerte y Diviertete!
                </div>
            </div>
        </div>
    );
}

export default Rules;