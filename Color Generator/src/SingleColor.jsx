import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, allEl}) => {
    const[alert, setAlert] = useState(() => false)
    const bcg = rgb.join(",")  
    const hexColor = rgbToHex(...rgb)
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000);
        return () => clearTimeout(timeout)
    }, [alert])

  return(
    <article className={`${index > allEl / 2 ? "color-light color": "color"}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={() =>{
        setAlert(true)
        navigator.clipboard.writeText(hexColor);
    }} >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexColor}</p>
        {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor