import { useState } from 'react'
import '../scss/app.css'
import Header from '../components/header'
import Body from '../components/Body'
import Pie from '../components/Pie'
function App() {

  return (
   <>
   <div className='all'>
  <Header />
  <Body />
  <Pie />
   </div>
    </>
  )
}

export default App
