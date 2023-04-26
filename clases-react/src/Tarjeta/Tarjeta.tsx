import React from "react";
import {TarjetaProps} from "./types";

// const Componeten1 = () => {
//     return (<div></div>)
// }
//
// const obj = {
//     uno: {
//         lolaxo: 1
//     },
//     holi: {
//         quepedo: 2
//     }
// }

// const { uno: { lolaxo }, holi  } = props;
//
const Tarjeta: React.FC<TarjetaProps> = props => {
    const { datos: {img, title}} = props;

    return (
        <div>
            <div>
                <img />
                <div>
                    <p>{title}</p>
                    <p>LUGAR</p>
                    <p>PRECIO</p>
                </div>
            </div>
            <div>
                <p>LISTA DE COSAS</p>
            </div>
        </div>
    )
}

export default Tarjeta;