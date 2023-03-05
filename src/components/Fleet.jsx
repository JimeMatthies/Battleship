import React from "react";

const Fleet = ({ reglas }) => {
    return (
        <div className="bs-fleet col-2 mx-3">
            <h1>Barcos</h1>
            <ul className="list-group d-flex justify-content-center">
                <li className="list-group-item">Portaaviones - 5 casillas</li>
                <li className="list-group-item">Buque - 4 casillas</li>
                <li className="list-group-item">Submarino - 3 casillas</li>
                <li className="list-group-item">Crucero - 3 casillas</li>
                <li className="list-group-item">Patrullero - 2 casillas</li>
                <li className="list-group-item">Puedes colocar tus barcos verticalmente, horizontalmente y en diagonal.</li>
            </ul>
            <button className="btn btn-success mt-3" onClick={reglas}>Reglas</button>
        </div>
    );
}

export default Fleet;