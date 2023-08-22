import React from 'react'
import './App.css'
import Data from '../data.js'

import NavBar from '../components/header'
import Card from '../components/card'

function App() {
  const cards = Data.map(data =>{
    return(
      <Card
      key = {data.id}
      data ={data}
      />
    )
  })
  return (
        <div className='container'>
          <NavBar/>
          <div className="cards-section">
          {cards}
          </div>
          
        </div>
  )
}

export default App
