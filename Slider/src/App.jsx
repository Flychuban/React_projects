import { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './App.css'
import data from "./data"

export default function App(){
  const[people, setPeople] = useState([])
  const[index, setIndex] = useState(0)

  useEffect(() =>{
    setPeople(() => data)
  }, [])

  useEffect(() =>{
    const slider = setInterval(() => {
      setIndex(prevState => prevState + 1)
    }, 3000);
    return ()=> clearInterval(slider)
  }, [index])

  useEffect(() =>{
    const lastElement = people.length - 1
    if(index < 0){
      setIndex(lastElement)
    }
    else if(index > lastElement){
      setIndex(0)
    }
  }, [index, people])


  return(
    <main className='section'>
      <div className='title'>
        <h2><span>/</span> Reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) =>{
            let position = 'nextSlide'
            if(personIndex === index){
              position = 'activeSlide'
            }
            if(personIndex === index - 1 || (index === 0 && personIndex === person.length -1)){
              position = "lastSlide"
            }

            const {id, image, name, title, quote} = person
            return(
              <article key={id} className={position}>
                <img src={image} alt={name} className='person-img'/>
                <h4>{name}</h4>
                <h5 className='title'>{title}</h5>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon'/>
              </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(prevState => prevState - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next'>
          <FiChevronRight onClick={() => setIndex(prevState => prevState  + 1)}/>
        </button>
      </div>
    </main>
  )
} 
