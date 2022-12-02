import { useState, useEffect } from 'react'
import './App.css'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () =>{
  let list = localStorage.getItem("list")
  console.log(list)
  if(list === undefined){
    return[]
  }
  else{
    return (list = JSON.parse(localStorage.getItem("list")))
  }
}

function App() {
  const[name, setName] = useState("")
  const[list, setList] = useState(() => getLocalStorage())
  const[isEditing, setIsEditing] = useState(false)
  const[editingId, setEditingId] = useState(null)
  const[alert, setAlert] = useState({show: false, msg: "", type: ""})

  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("hello")
    if(!name){
      showAlert(true, "danger", "Please enter a value!")
    }
    else if(name && isEditing){
      setList(list.map((item) =>{
        if(item.id === editingId){
          return {...item, title: name}
        }
        return item
      }))
      setName("")
      setIsEditing(false)
      showAlert(true, "success", "List edited!")
    }
    else{
      showAlert(true, "success", "Item added successfully!")
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName("")
    }
  }  
  const showAlert = ((show=false, type="", msg="") =>{
    setAlert({show, type, msg})
  })

  const clearList = () =>{
    showAlert(true, "danger", "Items cleared successfully!")
    setList([])
  }
  const removeItem = (id) =>{
    showAlert(true, "danger", "Item deleted")
    setList(list.filter((item) => item.id !== id))
  }
  const editList = (id) =>{
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditingId(id)
    setName(specificItem.title) 
  }
  
  useEffect(() =>{
    localStorage.setItem("list" , JSON.stringify(list))
  }, [list])
  return(
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g. eggs' onChange={(e) => setName(e.target.value)} value={name}/>
          <button className='submit-btn' type='submit'>{isEditing ? "edit" : "submit"}</button>
        </div>
      </form>
      {list.length>0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editList={editList}/>
          <button className='clear-btn' onClick={clearList}>clear items</button>
        </div> 
      )}
    </section>
  )
}

export default App
