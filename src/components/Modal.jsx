import '../scss/modal.css'
import '../scss/header.css'
import {BsTsunami} from "react-icons/bs"
import React, { useState } from 'react';
const Modal = (props) => {
  const { clima } = props
  const {weatherData} = props
  const [isOpen, setIsOpen] = useState(false);
  const [citySelect, setCitySelect] = useState('')
//  console.log(clima, 'desde modal')

if(!props){
  return 
}

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const recuperarCiudad = (ciudad) =>{
    setCitySelect(ciudad)
    weatherData(ciudad)
    closeModal()
  }

  return (
    <div>
      <button className='weather-button' onClick={openModal}>{citySelect.nombre_ciudad || 'Selecciona'} <BsTsunami className='tsunami-ico' /></button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Selecciona tu ciudad</h2>
            <div className='modal-cities'>
            {clima.map(data=><button className='btn-city' key={data.id_ciudad} onClick={()=>recuperarCiudad(data)}> {data.nombre_ciudad} </button>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
