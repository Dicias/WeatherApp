import '../scss/carrusel.css'
const Carrusel = (props) =>{
    const {city} = props;
    console.log(city, 'desde carrusel')
    return(
        <div className="carrusel-container">
                <article>
                <p>Lunes</p>
            <img src='../../img/nube-ico.png'/>
                <p>{city.temp_prox1}°</p>
                </article>
                <article>
                <p>Martes</p>
            <img src='../../img/nube-ico.png'/>
            <p>{city.temp_prox2}°</p>
                </article>
                <article>
                <p>Miercoles</p>
            <img src='../../img/nube-ico.png'/>
            <p>{city.temp_prox3}°</p>
                </article>
                <article>
                <p>Jueves</p>
            <img src='../../img/nube-ico.png'/>
            <p>{city.temp_prox4}°</p>
                </article>
                <article>
                <p>Viernes</p>
            <img src='../../img/nube-ico.png'/>
            <p>{city.temp_prox5}°</p>
                </article>

        </div>
    )
}

export default Carrusel