import React, { useEffect } from 'react'

const Alert = ({...alert}) => {
  const{msg, type, removeAlert, list} = alert
  useEffect(() =>{
    const timeout = setTimeout(() => {
        removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])
  return(
    <div className={type == "success" ? "alert alert-success" : "alert alert-danger"}>
        <p>{msg}</p>
    </div>
  )
}

export default Alert