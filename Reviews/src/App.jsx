import { useState } from 'react'
import './App.css'
import Review from "./Review"


function App(){
  return(
    <main>
      <div className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <div className='review'>
          <Review />
        </div>
      </div>
    </main>
  )
}

export default App;