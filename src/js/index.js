//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

const CrearSemaforo = () =>{
    const [estadocolor, setEstadolight] = useState(null);
    return(
        <>
        <div className="paloSemaforo"></div>
            <div className="contornosemaforo">
                <div className="luces">
                    <div class={ estadocolor === "colorrojo" ? "colorrojolight": "colorrojo"} onClick = {() => setEstadolight("colorrojo")}></div>
                    <div class={ estadocolor === "colornaranaja" ? "colornaranjalight": "colornaranaja"} onClick = {() => setEstadolight("colornaranaja")}></div>
                    <div class={ estadocolor === "colorverde" ? "colorverdelight": "colorverde"} onClick = {() => setEstadolight("colorverde")}></div>
                </div>
            </div>
        
        </>
)};

ReactDOM.render(<CrearSemaforo />, document.querySelector("#app"));
