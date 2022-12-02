import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const[isSidebarOpened, setIsSidebarOpened] = useState(false)
    const[isModalOpened, setIsModalOpened] = useState(false)

    const openSidebar = () =>{
        setIsSidebarOpened(true)
    }
    const closeSidebar = () =>{
        setIsSidebarOpened(false)
    }

    const openModal = () =>{
        setIsModalOpened(true)
    }
    const closeModal = () =>{
        setIsModalOpened(false)
    }

    return(
        <AppContext.Provider 
            value={{
                isSidebarOpened,
                isModalOpened,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal
        }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}