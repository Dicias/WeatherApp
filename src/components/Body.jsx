import { useEffect, useState } from 'react'
import '../scss/body.css'
import Carrusel from './Carrusel'
const Body = (props) =>{
  const {city} = props
//const [rainImg, setRainImg] = useState('../../img/soleado.png');
  const [colorWeather, setColorWeather] = useState('#2bcaa0');
  const [imgWeather, setImgWeather] = useState('../../img/weather-icon.png');
  const weatherColor ={
    backgroundColorOne: '#ff8811', //naranja -> mayor a 25° menor a 30°
    backgroundColorTwo: 'red', // Rojo -> Mayor a 30°
    backgroundColorThree: '#1865c1', // Azul oscuro -> Menor a 25° mayor a 20°
    backgroundColorFour: '#83dbf2' //Azul claro -> Menor a 20°
  }
  useEffect(()=>{
    console.log('Se ejecuto el useEffect', city.temp_actual);

    if(city.temp_actual <= 20 && city.temp_actual > 1){
      setColorWeather(weatherColor.backgroundColorFour)
      setImgWeather('../../img/carambano.png')
    }
    else if(city.temp_actual > 20 && city.temp_actual <= 25){
      setColorWeather(weatherColor.backgroundColorThree)
      setImgWeather('../../img/copo-de-nieve.png')
    }
    else if(city.temp_actual > 25 && city.temp_actual <= 30){
      setColorWeather(weatherColor.backgroundColorOne);
      setImgWeather('../../img/dom.png');
    }
    else if(city.temp_actual > 30){
      setColorWeather(weatherColor.backgroundColorTwo);
      setImgWeather('../../img/extra-sun.png');
    }
  },[city.temp_actual])


    return(
    <div className="body-cont">
        <section className='weather-cont'> 
          <div className='weather-actual' style={{backgroundColor: colorWeather}}>
              <div className='img-container'>
              <p >La temperatura actual</p>
              <p style={{fontSize: '3rem'}}> {city.temp_actual}° </p>
           </div>
          <img  src={imgWeather} className='weather-img'/>
          </div>
          <div className='weather-cont2'>
        <p style={{margin: '10px'}}>Pronostico días siguientes</p>
         
          <Carrusel city={city} />
        
        </div>
        </section>
      
        <section className='rain-cont'>
          {city.porcentaje_lluvia <= 50 ? (
            <img src='../../img/Soleado.png' alt='imagen-soleado' />
          ) : (
            <img src='../../img/nube.png' alt='imagen-lluvia' />
          )
           }
        <article className='rain-article'> 
        <p>Probabilidad de lluvia</p>
        <h3>{city.porcentaje_lluvia}%</h3>
        </article>
        </section>
        </div>
    )
}

export default Body