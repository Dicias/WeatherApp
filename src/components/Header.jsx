import '../scss/header.css'
import {BsTsunami} from "react-icons/bs"
const Header = () =>{

    return(
        <nav className="nav">
            <div className='logo-container'>
    <img src='../../img/weather-logo.png' />
    <h1> Dicias's Weather</h1>
    </div>
    <button className='weather-button'> Querétaro, Qro. <BsTsunami className='tsunami-ico' /> </button>
</nav>

    )
}

export default Header;