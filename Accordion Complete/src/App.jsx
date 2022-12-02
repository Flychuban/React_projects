import { useState } from 'react'
import './App.css'
import data from "./data"
import Question from "./Question"

function App() {
  return(
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <div>
          {data.map(question =>{
            return(
              <Question 
                key={question.id}
                info={question.info}
                title={question.title}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
