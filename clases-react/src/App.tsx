import React, { useState } from 'react';
import './App.css';
import Tarjeta from "./Tarjeta/Tarjeta";
import { datos } from "./Tarjeta/datos";
import {cardDataProps} from "./Tarjeta/types";

function App() {
    // useSate(); -> [ estado, setEstado ]
    const [ estado, setEstado ] = useState(false);
    const [ data, setData ] = useState({
        llave1: {
            numero: 1
        },
        llave2: {
            numero: 2
        }
    });


    // Cosas para el +
    const [cardsData , setCardsData ] = useState<cardDataProps[] | []>([]);


    const handleOnClick = () => {
        console.log("WEBOS")
        // setEstado(!estado);
        setData(prev => ({
            ...prev,
            llave1: {
                numero: 3
            }
        }))
    }

    // falsy
        /*
        [], "",  {}, false, undefined, null
         */

    const handleAddCard = () => {
        // agregar nuevo el al array = sig elemento en ts de datos
        // [1, 2] = [...array] => [1, 2]
        setCardsData(prev => [...prev, datos[cardsData.length]]);
    }

    console.log(cardsData)

  return (
      <>
        {/*<button onClick={handleOnClick}>HOLIII</button>*/}
        {/*  {estado && <p>ME P ICASTEE</p>}*/}
        {/*  {estado ? <p>ME P ICASTEE</p> : <p>QUE CHACA</p>}*/}
          {cardsData && cardsData.map(data => <Tarjeta datos={data} />)}
          <button onClick={handleAddCard}>
              +
          </button>
      </>
  );
}

export default App;
