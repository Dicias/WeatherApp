import { useState } from 'react'
import '../scss/header.css'
import Modal from './Modal'
const Header = (props) =>{
const {clima} = props 
const {weatherData} = props
    if(!props){
        return(
            <div className='all'>
            <Header />
            <h1 className='loading'>Loading...</h1>
            </div>
        )
    }
else
    return(
        <nav className="nav">
            <div className='logo-container'>
    <img src='../../img/weather-logo.png' />
    <h1> Dicias's Weather</h1>
    </div>
    <Modal clima={clima} weatherData={weatherData} />
</nav>
    )
}

export default Header;