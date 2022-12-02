import React from 'react'
import { useGlobalContext } from './Context'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import logo from "./logo.svg"

const Sidebar = () => {
    const{isSidebarOpened, closeSidebar} = useGlobalContext()

  return(
    <aside className={`${isSidebarOpened ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className='sidebar-header'>
            <img src={logo} alt="codding addict" className='logo' />
            <button className='close-btn' onClick={closeSidebar}>{<FaTimes />}</button>
        </div>
        <ul className='links'>
            {links.map((link) =>{
                const{id, url, text, icon} = link
                return(
                    <li key={id}>
                        <a href={url}>
                            {icon} {text}
                        </a>
                    </li>
                )
            })}
        </ul>
        <ul className='social-icons'>
            {social.map((item) =>{
                const{id, url, icon} = item
                return(
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default Sidebar