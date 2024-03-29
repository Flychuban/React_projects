import React, { useState, useEffect } from 'react'
import './App.css'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

export default function App(){
  const[loading, setLoading] = useState(true)
  const[tours, setTours] = useState([])

  const removeTour = (id) =>{
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    }
    catch(error){
      setLoading(true)
      console.log(error)
    }
  }

  useEffect(() =>{
    fetchTours()
  }, [])

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button onClick={() => fetchTours()} className="btn">Refresh</button>
        </div>
      </main>
    )
  }

  return(
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}
