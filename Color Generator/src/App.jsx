import { useState } from 'react'
import './App.css'
import Value from "values.js"
import SingleColor from './SingleColor'

export default function App(){
  const[color, setColor] = useState(() => "")
  const[error, setError] = useState(() => false)
  const[list, setList] = useState(() => new Value("#f12550").all(10))
  const[numberEl, setNumberEl] = useState(() => "")

  const handleSubmit = (e) =>{
    setError(false)
    e.preventDefault()
    try {
      const elements = (100 / parseInt(numberEl)) * 2
      let colors = new Value(color).all(elements)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return(
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)}placeholder="#f12550" required={true} className={`${error ? "error" : null}`}/>

          <input type="number" value={numberEl} onChange={(e) => setNumberEl(e.target.value)} placeholder="Num El" min={1} max={1000} required={true}/>

          <button className='btn' type="submit">Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) =>{
          return <SingleColor key={index} {...color} index={index} allEl={list.length}/>
        })}
      </section>
    </>
  )
}