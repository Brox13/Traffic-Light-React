//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const Luz = {
	boxShadow: "10px",
};


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



// const Home = () => {
//     const [color, brillo]=useState(null);
//     return (
//         <div className="container-fluid">
//             <div className="palito">
//                 <div className="luces">
//                     <div className={ color==="red"? "red luzenc": "red"}   onClick = {()=>brillo("red")}></div>
//                     <div className={ color==="yellow"? "yellow luzenc": "yellow"}onClick = {()=>brillo("yellow")}></div>
//                     <div className={ color==="green"? "green luzenc": "green"}onClick = {()=>brillo("green")}></div>
//                 </div>
//             </div>
//         </div>
//     )
//         }


// const Semaforo = () =>{
//     const colores = ["rojo", "naranja", "verde"];
//     const [estado, setEstado] = useState("rojo");
//     return (
//         <div className="CrearSemaforo">
//             colores.map(crearsemaforo) {

//             }
//         </div>
//     );
// };

// const Colores = () =>{
//     return(
//         <div className="elegircolor">
//             <
//         </div>
//     )

// }
//render your react application
ReactDOM.render(<CrearSemaforo />, document.querySelector("#app"));
