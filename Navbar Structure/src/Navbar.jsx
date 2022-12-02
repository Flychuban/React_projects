import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
    const[toggle, setToggle] = useState(false)
    const linksRef = useRef(() => null)
    const linksContainerRef = useRef(() => null)
  
    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(toggle){
            linksContainerRef.current.style.height = `${linksHeight}px` 
        }
        else{
            linksContainerRef.current.style.height = "0px"
        }
    }, [toggle])

    const handleToggle = () =>{
        setToggle(prevState => !prevState)
    }

    return(
    <nav>
        <div className="nav-center">
            <div className='nav-header'>
                <img className='logo' src={logo} alt="Logo" />
                <button className='nav-toggle' onClick={handleToggle}> <FaBars/> </button>
            </div>
            <div className='links-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                    {links.map((item) =>{
                        return(
                            <li key={item.id} >
                                <a href={item.url}>{item.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <ul className="social-icons">
                {social.map((item) =>{
                    return(
                        <li key={item.id}>
                            <a href={item.url}>{item.icon}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar