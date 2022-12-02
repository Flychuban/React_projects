import React, {useState} from "react";
import { AiOutlineMinus , AiOutlinePlus } from 'react-icons/ai';
export default function Question(props){
    const[showText, setShowText] = useState(false)
    return(
        <article className="question">
            <header>
                <h4>{props.title}</h4>
                <button className="btn" onClick={() => setShowText(prevState => !prevState)}>
                    {showText ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {showText && <p>{props.info}</p>}
        </article>
    )
}