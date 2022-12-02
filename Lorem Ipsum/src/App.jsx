import { useState } from 'react'
import './App.css'
import data from "./data"

function App() {
  const [count, setCount] = useState(() => 0)
  const [text,setText] = useState(() => [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if(amount < 1){
      amount = 1 
    }
    else if(amount > data.length){
      amount = data.length
    }
    setText(() => data.slice(0, amount)) 
  }

  return(
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input type="number" name='amount' id='amount' min={1} max={data.length} value={count} onChange={(e) => setCount(e.target.value)}/>
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) =>{
          return(
            <p key={index}>{item}</p>
          )
        })}
      </article>
    </section>
  )
}

export default App
