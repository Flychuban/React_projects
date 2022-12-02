
import React from "react" 
import { useState } from "react"
import people from "./data"
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Review(){
    const[index, setIndex] = useState(() => 0)
    const{name, job, image, text, id} = people[index]
    
    const prevPerson = () => {
        if(index == 0){
            setIndex(people.length - 1)
        }
        else{
            setIndex(prevState => prevState -= 1)
        } 
    }
    
    const nextPerson = () => {
        if(index == people.length - 1){
            setIndex(0)
        }
        else{
            setIndex(prevState => prevState += 1)
        } 
    }
    
    return(
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={() => setIndex(Math.floor(Math.random() * people.length))}>
                surprise me
            </button>
            
        </article>
    )
}