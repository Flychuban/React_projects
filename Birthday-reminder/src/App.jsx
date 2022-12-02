import React, { useState } from 'react'
import './App.css'
import List from "./List"
import data from "./data"

export default function App(){
  const [people, setPeople] = useState(data) 

  function clearList(){
    setPeople([])
  }

  return(
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={clearList}>Clear all</button>
      </section>
    </main>
  )
}
