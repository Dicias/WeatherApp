import { useState } from 'react'
import '../scss/body.css'
import Carrusel from './Carrusel'
const Body = (props) =>{
  const {city} = props

    return(
    <div className="body-cont">
        <section className='weather-cont'> 
          <div className='weather-actual'>
              <div className='img-container'>
              <p>La temperatura actual</p>
              <p style={{fontSize: '3rem'}}> {city.temp_actual}° </p>
           </div>
          <img  src='../../img/dom.png' className='weather-img'/>
          </div>
          <div className='weather-cont2'>
        <p style={{margin: '10px'}}>Pronostico días siguientes</p>
         
          <Carrusel city={city} />
        
        </div>
        </section>
      
        <section className='rain-cont'>
        <img src='../../img/nube.png' />
        <article className='rain-article'> 
        <p>Probabilidad de lluvia</p>
        <h3>{city.porcentaje_lluvia}%</h3>
        </article>
        </section>
        </div>
    )
}

export default Body