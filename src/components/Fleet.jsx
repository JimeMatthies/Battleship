import React from "react";

const Fleet = ({ reglas }) => {
    return (
        <div className="bs-fleet col-2">
            <h1>Barcos</h1>
            <button className="btn btn-success" onClick={reglas}>Reglas</button>
        </div>
    );
}

export default Fleet;