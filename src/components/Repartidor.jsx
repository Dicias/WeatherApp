import { useState } from "react";

const Repartidor = () => {
  const [theCity, setTheCity] = useState({
    nombre_ciudad: '',
    porcentaje_lluvia:'',
    temp_actual: '',
    temp_prox1: '',
    temp_prox2: '',
    temp_prox3: '',
    temp_prox4: '',
    temp_prox5: '',
  })
  //setTheCity(actalCity) 
  const recoverObj = (actualCity) => console.log(actualCity, 'recuperado');
}

 


export default Repartidor.recoverObj