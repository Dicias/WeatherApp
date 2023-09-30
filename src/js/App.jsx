import { useState, useEffect } from 'react'
import '../scss/app.css'
import Header from '../components/header'
import Body from '../components/Body'
import Pie from '../components/Pie'
import axios from 'axios'
function App() {
  const [clima, setClima] = useState('');  
  const [load, setLoad] = useState(false)
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
  const getWeatherData= (city)=>{
    setTheCity(city)
    //console.log(city, 'desde app');
  }

useEffect(()=>{
axios.get('http://localhost:3000/api/cities')
.then(res=>{
//console.log("Base de datos:", res.data);
setClima(res.data)
setLoad(true)
})
},[])

  if(!load){
    return(
      <div className='all'>
      <Header />
      <h1 className='loading'>Loading...</h1>
      </div>
    )
  }

  return (
   <>
   <div className='all'>
  <Header clima={clima} weatherData={getWeatherData}/>
  <Body city={theCity} />
  <Pie />
   </div>
    </>
  )
}

export default App
