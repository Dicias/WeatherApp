import '../scss/body.css'
import Carrusel from './Carrusel'
const Body = () =>{
    return(
    <div className="body-cont">
        <section className='weather-cont'> 
          <div className='weather-actual'>
              <div className='img-container'>
              <p>La temperatura actual</p>
              <p style={{fontSize: '3rem'}}> 36° </p>
           </div>
          <img  src='../../img/dom.png' className='weather-img'/>
          </div>
          <div className='weather-cont2'>
        <p style={{margin: '10px'}}>Pronostico días siguientes</p>
         
          <Carrusel />
        
        </div>
        </section>
      
        <section className='rain-cont'>
        <img src='../../img/nube.png' />
        <article className='rain-article'> 
        <p>Probabilidad de lluvia</p>
        <h3>70%</h3>
        </article>
        </section>
        </div>
    )
}

export default Body